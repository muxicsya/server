const axios = require('axios');

module.exports = {
  getLyrics: function (req, res) {
    console.log(req.body);
    axios({
      method: "GET",
      url: `https://api.lyrics.ovh/v1/${req.body.artist}/${req.body.title}`
    })
      .then((lyrics) => {
        const formatLyrics = lyrics.data.lyrics.replace(/\n/g, '<br>');
        console.log(formatLyrics);
        if (lyrics) {
          res.status(200).json({ lyric: formatLyrics });

        } else {
          res.status(404).json({ message: 'Lyrics not found' });
        }
      })
      .catch((err) => {
        // console.log(err.response.data.error);
        res.status(404).json({ message: err.response.data.error });
      });
  }
}