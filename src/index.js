import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//** Middlewares */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// express.static hace publicos los archivos estaticos (pej:css-html-jpg)
// que esten es la ruta que yo le indique.
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "/public/views"));
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res) => {
  res.render("index");
});

//empezando servidor
const PORT = 8080;
try {
  app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
  });
} catch (error) {
  console.log(`error en el puerto ${PORT}`);
}
