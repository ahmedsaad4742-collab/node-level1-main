const express =require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')

mongoose
.connect
("mongodb://ahmedsaad4742_db_user:idk6FXklrrlTNFS3@ac-kfr5rvo-shard-00-00.gkfdtrh.mongodb.net:27017,ac-kfr5rvo-shard-00-01.gkfdtrh.mongodb.net:27017,ac-kfr5rvo-shard-00-02.gkfdtrh.mongodb.net:27017/?ssl=true&replicaSet=atlas-w8pnh2-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
  console.log(`Http://localhost:${port}/`);
  app.get('/', (req, res) => {
    res.render("./views/home.html", {root: __dirname}) 

  })
})
.catch((err) => {console.log(err)
});
