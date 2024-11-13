import app from "./app";
const SERVER_PORT = process.env.SERVER_PORT || 8000;

app.listen(SERVER_PORT, () => {
  console.log(` app listening on port ${SERVER_PORT}`);
});
