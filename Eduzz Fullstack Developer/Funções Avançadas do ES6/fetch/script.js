fetch('/data.json')
  .then((responseStream) => {
    if (responseStream.status === 200) {
      return responseStream.json();
    } else {
      throw new Error('Request error');
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Erro: ', err);
  });
