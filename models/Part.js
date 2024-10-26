const mongoose = require('mongoose');


const partSchema = new mongoose.Schema({
    category: { type: String, required: [true, 'Category is required!'] },
    type: { type: String, required: [true, 'Type is required!'] },
    brand: { type: String },
    model: { type: String },
    yearFrom: { type: Number },
    yearTo: { type: Number },
    engineType: { type: String },
    partColor: { type: String },
    imageUrl: { type: String },
    condition: { type: String },
    title: { type: String },
    price: { type: Number, required: [true, 'Price is required!'] },
    orderedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }],
}, { timestamps: true });


const Part = mongoose.model('Part', partSchema);

module.exports = Part;