const express = require('express');
const router = express.Router();
const FormData  = require('../DB_models/model');

// Post-To send Data to DB
router.route('/create').post((req,res)=>{
    const data = new FormData(req.body)
    data.save();
    res.status(201).send(data);
})
// Get-To get Saved From LIst
router.route('/list').get((req, res) => {
    FormData.find()
      .then(data => res.json(data))
      .catch(error => res.status(500).json({ error: 'An error occurred while fetching data' }));
  });
  // Delete- To delete selected data 
  router.route('/delete/:id').delete(async(req,res)=>{
    try {
      const deleteddata = await FormData.findByIdAndDelete(req.params.id)
      if(deleteddata)
      res.status(201).send(`The Data Deleted sucessfully `)
     else 
     res.status(404).send("The same ID not Found")
  } catch (error) {
      res.status(404).send(error.message)
  }
  })
module.exports = router;