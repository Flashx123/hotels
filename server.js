const express = require('express');
const db = require('./db'); // Ensure the import matches the export
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes')
require('dotenv').config();

const app = express();
//const port = 3001;




app.use(bodyParser.json()); /// stores the data in req.body so we can store it

// the post function
/*app.post('/person', async(req,res) =>{
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
app.get('/person/:workType', async(req,res) => {
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
});*/
// Call the connectDB function to establish the database connection
//connectDB();

app.use('/person' , personRoutes); // this / person will give the path to person Route which has the gets and posts

app.get('/', function (req, res){
  res.send('Kam kori ase ne nai');
});


const PORT = process.env.PORT   // dotenv removes the applicable infomatinoon 
app.listen(PORT, () => {
  console.log('Chal raha hai Bhai');
});