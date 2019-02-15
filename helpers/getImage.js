const axios = require('axios')

module.exports ={
   getImage(title) {
       return new Promise((res, rej) => {
           axios({
               method:'get',
               url:`https://deezerdevs-deezer.p.mashape.com/search?q=${title}`,
               headers: {
                   "X-Mashape-Key": process.env.DEEZER ,
                   "Accept": "text/plain"
                }
            })
            .then((response) => {
                let image = response.data.data[0].album.cover_xl
                res(image)
            })
           .catch(err => {
              rej(err)
           })

       })
    }
} 
