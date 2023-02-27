const app = require("./app")
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(
      `La aplicacion de ejemplo se esta ejecutando en localhost:${port}`
    );
  });