const express = require("express");
const axios = require('axios');
const router = express.Router();

router.get('/people', async (req, res) => {
  const { page } = req.query;
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      res.json(response.data);
    } catch (error) {
      console.error('Hiba törént a karakterek lekérése során:', error);
      res.status(500).json({ message: 'Szerver Hiba' });
    }
  });
  
module.exports = router;