const express = require('express');
const router = express.Router();
const Person = require('./../models/People')


router.post('/', async(req,res) =>{
    try{
      const data = req.body; // here the the information that will be recieved upon rwquesting 
  
      const newPer = new Person(data); //Create a person using the model this will automatically update thorugh the data
    
    // save ing the informatin
    
    
     const respond = await newPer.save();   // jab tak save na ho jaye wait karte rehna and save function is an optimal method for saving data
     console.log('data is fetched');
     res.json(respond);
      
  }catch(err){
     console.log(err);
     res.json({error:'unsuccessful',details: err.message});
  }
  });
  
  //// parameterised get methods
  router.get('/:workType', async(req,res) => {
       try {
        
        const w = req.params.workType;
  
        if (w === 'Lawyer' || w === 'Prostitute' || w === 'Chef' || w === 'Teacher') {
          const data = await Person.find({ Jobs: w });
          console.log('Data is fetched with parameters');
          res.json(data);
        } else {
          res.status(400).json({ error: 'Invalid' }); // Added status code
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'freaking disappointed', details: err.message }); // Added status code
      }
  });

  module.exports = router;