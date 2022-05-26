const express = require('express');

const home = (req, res) => {
    res.render('pages/page');
}
const dogs = (req, res) => {
    res.send('dogs');
}
const cats = (req, res) => {
    res.send('cats');
}
const fishes = (req, res) => {
    res.send('fishes');
}

module.exports.home = home;
module.exports.dogs = dogs;
module.exports.cats = cats;
module.exports.fishes = fishes;