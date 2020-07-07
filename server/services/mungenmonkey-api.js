const axios = require('axios');

const getWeapons = async () =>  {
  const { data } = await axios.get('https://mugenmonkey.com/api/v0/ds3_weapons');
  return data;
}

module.exports = getWeapons

// ?per_page=500&page=1