const app = require('express')();
const PORT = 8080;

app.listen(
  PORT,
  () => console.log(`Servidor rodando na porta:${PORT}`)
)



// app.get('/exemplo', (req, res) => {
//   res.status(200).send({
//     tshirt: 'oi',
//     size: 'large'
//   })
// })
// app.post('/exemplo/:id',(req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;

//   if (!logo) {
//     res.status(418).send({ message: 'erro' })
//   }

//   res.send({
//     tshirt: ` oi ${logo}`
//   });
// });