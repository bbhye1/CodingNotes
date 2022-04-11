import app from './app';

const PORT = 3000;

const { log : print } = console;

app.listen(PORT, () => {
  print(`App listening on port ${PORT}`);
});
