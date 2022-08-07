const { Tag } = require('../models');
const tagData = [
    {
        tag_name: 'Black',
    },
    {
        tag_name: 'Red',
    },
    {
        tag_name: 'White',
    },
    {
        tag_name: 'Brown',
    },
    {
        tag_name: 'Silver'
    },
    {
        tag_name: 'Gray'
    },
    {
        tag_name: 'RGB'
    }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;