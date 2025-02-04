import express from "express"

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render('index.ejs', { activePage: 'home' });
})

app.get("/about", (req, res) => { 
  res.render('about.ejs', { activePage: 'about' });
})

app.listen(port, () => {
  console.log(`Server running on ${port}.`)
})

