const axios = require('axios')

module.exports =  (title) => {
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
        return image
    })
    .catch(err => {
       console.log(err)
    })
}
