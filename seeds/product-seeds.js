const { Product } = require('../models');

const productData = [
    {
        product_name: 'Gigabyte GeForce RTX 3090',
        price: 1299.99,
        stock: 2,
        category_id: 1,
    },
    {
        product_name: 'AMD Ryzen 9 5900X',
        price: 360.99,
        stock: 2,
        category_id: 2,
    },
    {
        product_name: 'Corsair SF750 80 Plus Platinum',
        price: 171.99,
        stock: 2,
        category_id: 3,
    },
    {
        product_name: 'Gigabyte B450 AM4 Socket',
        price: 70.99,
        stock: 5,
        category_id: 4,
    },
    {
        product_name: 'Corsair Vengeance RGB DDR4 3200 16GB',
        price: 73.99,
        stock: 10,
        category_id: 5,
    },
    {
        product_name: 'Wester Digital Black SN850 M.2 NVME PCI-Express 4.0',
        price: 139.99,
        stock: 6,
        category_id: 6,
    },
    {
        product_name: 'Fractal Design Meshify ATX Mid Tower',
        price: 99.99,
        stock: 5,
        category_id: 7,
    },
    {
        product_name: 'Noctua NH-D15 D-Type',
        price: 107.99,
        stock: 4,
        category_id: 8,
    },
    {
        product_name: 'Asus Tuf Gaming Keyboard and Mouse Combo',
        price: 107.99,
        stock: 4,
        category_id: 9,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;