'use strict'

const mongoose = require('mongoose');

const billSchema = mongoose.Schema(
{
    date: String,
    numberBill: String,
    client: String,
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
    pdf: String,
});

module.exports = mongoose.model('Bill', billSchema);