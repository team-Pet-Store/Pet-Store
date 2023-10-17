const { User, Product } = require("./index")
const bcrypt = require('bcrypt')





const createAdmin = async () => {
    const password = 'adminadmin'
    const encryptedPassword = await bcrypt.hash(password, 10)
    try {
        const admin = await User.create({ firstName: "admin", lastName: "admin", email: "admin@admin.com", password: encryptedPassword, role: "admin" })
    }
    catch (error) {
        console.log(error)

    }

}

const createProducts = async () => {
    try {
        const products = await Product.bulkCreate([
            { name: 'Diamond Pro89 Beef, Pork, & Ancient Grains', category: "Food", animal: "Dog", imageUrl: "https://petproducts.com/cdn/shop/products/46852-1614098240.jpg?v=1688071734&width=500", description: "Your dog is dedicated to pursuing perfection as you are. That's why they deserve Diamond Pro89 Beef, Pork and Ancient Grains Formula for Adult Dogs. This high-protein dog food is fortified with amino acids and incorporates ingredients of exceptional quality, including energy-dense protein sources and ancient grains, so your dog will have the nutrients they need to support endurance and performance.", price: 80 },
            { name: 'Diamond Naturals Lamb Meal & Rice', category: "Food", animal: "Dog", imageUrl: "https://petproducts.com/cdn/shop/products/30772-1569518374.jpg?v=1687313315&width=1000", description: "* Antioxidant Formulation * Omega Fatty Acids for Skin and Coat * Crunchy Kibble Helps Clean Teeth and Reduce Plaque * Natural Formula with Vitamins and Minerals Lamb protein provides optimal nutrition for dogs that prefer the taste of lamb, or are sensitive to chicken or corn. Guaranteed levels of vitamin E and selenium ensure that your dog receives optimum antioxidant nutrition, while omega-6 and omega-3 fatty acids keep the skin and coat healthy and shiny.", price: 39.64 },
            { name: 'Royal Canin Spayed or Neutered', category: "Food", animal: "Cat", imageUrl: "https://petproducts.com/cdn/shop/products/32948-1489434783.jpg?v=1687331053&width=500", description: "With so many cat and kitten food options out there focused on ingredients, how do you know what's best? Royal Canin knows there's a science to it—researching each pet's unique nutritional needs to formulate the most precise combination of nutrients in their diet to help your pet live a magnificent life. Spaying or neutering leaves a lasting impact on a young kitten's health and weight. Hormone changes lessen energy needs, while giving them a giant appetite.", price: 33.78 },
            { name: 'Royal Canin Indoor 7+ Dry Cat Food', category: "Food", animal: "Cat", imageUrl: "https://petproducts.com/cdn/shop/products/31899-1489435424.jpg?v=1687334219&width=600", description: "With so many indoor cat food options out there focused on ingredients, how do you know what's best? Royal Canin knows there's a science to it—researching each pet's nutritional needs to create a diet with the precise combination of nutrients needed to live a magnificent life. Mature cats face a unique set of health challenges. Fewer playtime sessions can mean lower muscle mass", price: 33.78 },
            { name: 'Titan Easy-On Pinch Training Collar', category: "Upholstery", animal: "Dog", imageUrl: "https://petproducts.com/cdn/shop/products/86562.jpg?v=1693591775&width=600", description: "The Titan Easy-On Prong Training Collar is the perfect tough, safe and effective training collar for your willful dog. This chrome-plated collar features a nylon loop for optimum durability and strength, and will not tarnish, rust or break.", price: 19.99 },
            { name: 'Coastal Pet Size Right Nylon Adjustable Harness', category: "Upholstery", animal: "Dog", imageUrl: "https://petproducts.com/cdn/shop/products/19490.jpg?v=1693592043&width=800", description: "Coastal Pets Oak Tanned Leather Round Collars are the ideal collar choice for long-haired breeds or dogs with sensitive skin. These durable collars will not mat your pets hair and have a leather core to ensure that they will hold their shape.", price: 10.99 },
            { name: 'Coastal Pet Safe Cat Glow in the Dark Adjustable Collar', category: "Upholstery", animal: "Cat", imageUrl: "https://petproducts.com/cdn/shop/products/19829.jpg?v=1693592018&width=800", description: "The Safe Cat Glow in the Dark Adjustable Breakaway Collar in Galaxy will make finding your cat in the dark easy. Adjusts from 8-12. This collar charges during the day, even indoors, to glow all night and is made with a pivoting breakaway buckle that releases the collar if your cat gets caught. This collar offers optimal safety for your beloved felines.", price: 9.99 },
            { name: 'Coastal Pet Size Right Nylon Adjustable Cat Harness', category: "Upholstery", animal: "Cat", imageUrl: "https://petproducts.com/cdn/shop/products/19862.jpg?v=1693592023&width=400", description: "Coastal Size Right Adjustable Harness for Cats is made of durable nylon. This figure-8 style harness allows the neck and girth to be perfectly sized. A comfort fit pad with swivel ring allows the feline to move freely without the lead tangling under its legs.", price: 10.99 },
            { name: 'Coastal Pet Rascals Vinyl Soccer Ball for Dogs', category: "Toy", animal: "Dog", imageUrl: "https://petproducts.com/cdn/shop/products/55632.jpg?v=1678245812&width=400", description: "The Coastal Pet Rascals Vinyl Soccer Ball turns an average day at the park into the final game of the World Cup! Its miniature size makes it perfect for energetic games of fetch, catch, or anything else you and your dog can think up! Made of non-toxic vinyl, this ball has a built-in squeaker for extra fun and just the right amount of firmness to satisfy those tough canine jaws.", price: 2.99 },

            { name: 'Coastal Pet Rascals Vinyl Soccer Ball for Dogs', category: "Toy", animal: "Cat", imageUrl: "https://petproducts.com/cdn/shop/products/97181.jpg?v=1693523824&width=500", description: "The Cataction Rattle Ball is sure to be a favorite new addition to your cats stash of toys. This multi-textured cat toy features a durable, non-toxic rubber outer shell that is gentle on your cats mouth. Filled with sparkling yarn and a rattle, your cat will love the rattle and different textures the Rattle Ball provides. Great for fetch, the Rattle Ball rolls and bounces off hard surfaces and is perfectly sized for your cat to pick up and carry off to hide. For even more fun, soak in catnip before use.", price: 3.83 },
        ]);
    } catch (error) {
        console.log(error)
    }

}

createAdmin()
createProducts()

