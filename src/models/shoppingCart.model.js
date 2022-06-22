'use strict'

const mongoose = require('mongoose');

const shoppingCartSchema = mongoose.Schema(
{
    client: String,
    dpi: String,
    NIT: String,
    user: {type:mongoose.Schema.ObjectId, ref: 'User'},
    reservations: 
    [{
            reservation: {type:mongoose.Schema.ObjectId, ref: 'Reservation'}, 
            quantity: Number,
            price: Number,
            subTotalReservation: Number
    }],
    IVA: Number,
    subTotal: Number,
    total: Number,
});

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);