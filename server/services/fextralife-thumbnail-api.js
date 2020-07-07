const axios = require('axios');

const getThumbnail = async (itemName) => {
  console.log(itemName)
  const { data } = axios.get('https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/astora_greatsword.png')
  console.log('data', data)
  return data;
}

module.exports = getThumbnail;