const { Product } = require("../model");
const cloudinary = require("../utils/cloudinary");
const { Readable } = require("stream");
const { Op } = require("sequelize");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const { searchTerm } = req.query;
      let products;
      if (searchTerm) {
        products = await Product.findAll({
          where: {
            name: {
              [Op.like]: `%${searchTerm}%`,
            },
          },
        });
      } else {
        products = await Product.findAll();
      }
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  createProduct: async (req, res) => {
    try {
      const { name, category, animal, imageUrl, description, price } = req.body;
      const imageBuffer = req.file.buffer;
      const imageStream = Readable.from(imageBuffer);

      const cloudinaryResult = await cloudinary.uploader.upload_stream(
        {
          resource_type: "image",
        },
        async (error, result) => {
          if (error) {
            console.error("Error uploading image to Cloudinary:", error);
            res.status(500).json({ error: "Image upload failed" });
          }
          console.log(cloudinaryResult);

          const createdProduct = await Product.create({
            name,
            category,
            animal,
            imageUrl: result.secure_url,
            description,
            price,
          });
          res.status(201).json(createdProduct);
        }
      );

      imageStream.pipe(cloudinaryResult);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { name, category, animal, description, price } = req.body;
      const productId = req.params.id;
      let imageUrl;
      if (req.file) {
        const imageBuffer = req.file.buffer;
        const imageStream = Readable.from(imageBuffer);

        const cloudinaryResult = await cloudinary.uploader.upload_stream(
          {
            resource_type: "image",
          },
          async (error, result) => {
            if (error) {
              console.error("Error uploading image to Cloudinary:", error);
              res.status(500).json({ error: "Image upload failed" });
            }
            imageUrl = result.secure_url;
          }
        );
        imageStream.pipe(cloudinaryResult);
      }
      const updatedProductData = {
        name,
        category,
        animal,
        description,
        price,
      };
      if (imageUrl) {
        updatedProductData.imageUrl = imageUrl;
      }
      const updatedProduct = await Product.update(updatedProductData, {
        where: { id: productId },
      });
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const deleteProduct = await Product.destroy({ where: { id: productId } });
      res.status(200).json(deleteProduct);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
