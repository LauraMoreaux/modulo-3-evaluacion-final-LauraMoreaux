const getDatafromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results.map((item, index) => {
        item.id = 'id-' + index;
        return item;
      });
      return characters;
    });
};

export default getDatafromApi;
