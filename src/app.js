const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 8000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async(req, res) => {
    try{
        const allMusicians = await Musician.findAll();
        res.json(allMusicians);
    } catch(error){
        console.error("this is error from app.get");
    }
})

app.get('/musicians/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Musician.findByPk(id);
        res.json(data);
    } catch(error) {
        console.error("this is an error");
    }
})

app.post("/musicians", async (req,res,next) => {
    try{
        const newMusician= await Musician.create(req.body);
        res.json(newMusician);
    } catch(e){
        console.error(e);
        next(e);
    }
})

app.put("/musicians/:id", async (req, res, next) => {
    try {
        let chosenMusician = await Musician.findByPk(req.params.id);
        chosenMusician = await chosenMusician.update(req.body);
        res.json(chosenMusician);
    } catch (e) {
        console.error(e);
        next(e);
    }
})







module.exports = app;