require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const app = express();
// saving express() to a variable called app

app.use(json());
app.use(cors());
// bodyParser and cors middleware ---what is middleware?

const {
  getAll,
  getOne,
  update,
  create,
  deleteProduct
} = require(`${__dirname}/controllers/product_controller`);

//endpoints
app.get("/api/products", getAll);
app.get("/api/procuct/:id", getOne);
app.put("/api/product/:id", update);
// ----------------------------what is id?desc=...?--------------------
app.post("/api/product", create);
app.delete("/api/product/:id", deleteProduct);

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => {
    console.log(err);
  });
//------------why set('db',dbInstance), what does it mean?
// .then () is a promise?

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port: ${port}.`);
});
