const Joi = require ('joi');
const express = require('express');
const app = express();
app.use(express.json());
// allows me to open app locally
const port = process.env.PORT || 3000;
app.listen(port , () => console.log(`Listening on port ${port}...`));

// array containing genres
const genres = [
  {id:1, name: 'Acton'},
  {id:2, name: 'Drama'},
  {id:3, name: 'Comedy'}
]

// returns the list of genres when requested.
app.get('/api/genres', (req,res) =>{
  res.send(genres);
});
// returns one specific genre when requested by its id
app.get('/api/genres/:id', (req, res) =>{
 const genre = genres.find(c = c.id === parseInt(req.params.id));
 if(!genre) res.status(404).send('The genre with the given id was not found')// 404 Error
 res.send(genre);
});

app.post('/api/genres', (req, res) =>{
  const{error} = validateGenre(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  genre.name = req.body.name
  res.send(genre);

})

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}
