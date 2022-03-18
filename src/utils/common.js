const SYMBOLS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const makeId = (idLength) => {
  let id = '';
  for (let i = 0; i < idLength; i++) {
    id += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length));
  }
  return id;
};
