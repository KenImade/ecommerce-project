const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    tag: {
        type: String,
    },
    category: {
        type: String,
    },
    isNew: {
        type: Boolean,
    },
    preview: {
        type: String,
    },
    productImage: {
        type: String,
    },
    info: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    features: {
        type: String,
    },
    accessories: [
        {
            name: {
                type: String,
            },
            quantity: {
                type: Number,
            }
        }
    ],
    gallery: [String],
    cartImage: {
        type: String,
    }
});

module.exports = mongoose.model('Product', ProductSchema);