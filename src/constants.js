export const api = {
  base: 'https://kinopoiskapiunofficial.tech/api',
  list: 'v2.2/films/top?type=TOP_250_BEST_FILMS&page=',
  one: 'v2.1/films',
  options: {
    method: 'GET',
    mode: 'cors',
    // mode: 'no-cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'f7787739-e376-42de-9668-da874c9c6cc1',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  },
};
