const express = require('express')
const app = express()
const PORT = 8000

const ott = {
  'netflix': {
    'moviename': 'Focus',
    'genre': 'drama',
    'year': 2015,
  },
  'amazon prime video': {
    'moviename': 'Swades',
    'genre': 'drama',
    'year': 2004
  },
  'disney': {
    'moviename': 'Lost',
    'genre': 'adventure',
    'year': 2004
  },
  'unknown': {
    'moviename': 'unknown',
    'genre': 'unknown',
    'year': 0
  }
}

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const movieList = request.params.name.toLowerCase()
    // console.log(request.params.name)
    // console.log(movieList)
    // console.log(ott[movieList])
    if( ott[movieList] ){
      response.json(ott[movieList])
    }else{
      response.json(ott['unknown'])
    }

})

app.listen(PORT, ()=>{
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
