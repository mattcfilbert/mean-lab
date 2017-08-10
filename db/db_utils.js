const axios = require('axios')
const md5 = require('md5')

const ts = Date.now()
const marvelPUB = 'd0eb4827d960f0a1f1e295376f683498'
const marvelAPI = process.env.MARVEL_API_KEY
const hash = md5(ts + marvelAPI + marvelPUB)


function getHeroes (offset = 0, characterData = []) {
  return axios
    .get(`http://gateway.marvel.com/v1/public/series/354/characters?offset=${offset}&ts=${ts}&apikey=${marvelPUB}&hash=${hash}`)
    .then((res) => {
      let count = res.data.data.total
      characterData = characterData.concat(res.data.data.results)
      offset += res.data.data.results.length
      console.log(`Downloading ${offset} of ${count}`)
      if(offset < count) {
        return getHeroes(offset, characterData)
      } else {
        return characterData
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  getHeroes
}