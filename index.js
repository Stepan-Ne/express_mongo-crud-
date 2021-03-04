import express, { json } from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';
import router from './routes.js';

const app = express();
mongoose.set('useFindAndModify', false);

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.o870r.mongodb.net/db1?retryWrites=true&w=majority'

// express по умолчанию не может преобразовывать json
// это необх указать
app.use(express.json())
app.use('/api', router)

app.get("/", (req, res) => {
  // обработаем поисковую строку запрос
  console.log("QUERY", req.query);
  // а теперь посмотрим на header
  console.log("HEADER", req.header);
  // обработаем ответ
  res.status(200).json("Express js");
});



//
async function startApp() {
  try {
    //DB
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    // server
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err)
      }
      console.log("Server is running...");
    })
  } catch(e) {
    console.log(e);
  }
}


startApp()