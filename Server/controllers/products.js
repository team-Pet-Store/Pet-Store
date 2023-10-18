const { Product }= require('../model')
const cloudinary =require("../utils/cloudinary")
const { Readable } = require('stream')

module.exports={
    getAllProducts: async (req, res) =>{
        try{
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
   
    createProduct: async (req, res) =>  {
        try{
            const {name, category, animal, imageUrl, description, price} = req.body
            const imageBuffer = req.file.buffer;
            const imageStream = Readable.from(imageBuffer)

            const cloudinaryResult = await cloudinary.uploader.upload_stream({
                resource_type: 'image',
            },
                async (error, result) => {
                    if (error) {
                        console.error('Error uploading image to Cloudinary:', error);
                        res.status(500).json({ error: 'Image upload failed' });
                    }
                    console.log(cloudinaryResult)
            
            const createdProduct = await Product.create({name, category, animal, imageUrl:result.secure_url, description, price});
            res.status(201).json(createdProduct);
                }
            )

            imageStream.pipe(cloudinaryResult);
        } catch (error){
            console.log(error)
            res.status(500).send(error)
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { name, category, animal, description, price } = req.body
            const productId = req.params.id;
            const imageBuffer = req.file.buffer;
            const imageStream = Readable.from(imageBuffer)

            const cloudinaryResult = await cloudinary.uploader.upload_stream({
                resource_type: 'image',
            },
                async (error, result) => {
                    if (error) {
                        console.error('Error uploading image to Cloudinary:', error);
                        res.status(500).json({ error: 'Image upload failed' });
                    }
                    console.log(cloudinaryResult)
          
            const updatedProduct = await Product.update({name, category, animal,imageUrl:result.secure_url, description, price},{ where: { id: productId } });
            res.status(200).json(updatedProduct)
        }
        )

        imageStream.pipe(cloudinaryResult);

        } catch (error){
            console.log(error)
            res.status(500).send(error)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            
            const productId = req.params.id;
            const deleteProduct = await Product.destroy({ where: { id: productId } })
            res.status(200).json(deleteProduct)
        }catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
        
    }
};