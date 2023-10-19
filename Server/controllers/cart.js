const { User, Product } = require("../model")

module.exports = {
    getCartItems: async (req, res) => {
        const { userId } = req.user
        try {
            const result = await Product.findAll({
                include: {
                    model: User,
                    where: { id: userId },
                },
            });
            res.status(200).json(result);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    addToCart: async (req, res) => {
        const {userId}=req.user
        const { productID } = req.params
        try {
            const user = await User.findByPk(userId);
            const product = await Product.findByPk(productID);

            if (!user || !product) {
                console.error('User or product not found.');
                return;
            }

            const cartItem = await user.addProduct(product);
            console.log('User added to the product successfully');
            res.status(201).json(cartItem)
        } catch (error) {
            console.error('Error:', error.message);
        }
    },
    removeFromCart: async (req, res) => {
        const { userID, productID } = req.params
        try {

            const user = await User.findByPk(userID);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            await user.removeProduct(productID);

            res.status(204).send('product removed from cart');
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    removeAllFromCart: async (req, res) => {
        const { id } = req.params
        try {

            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ error: 'Product not found' });
            }

            await user.setProducts([]);

            res.status(204).send('Cart empty');
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
};