const url = 'https://pokeapi.co/api/v2/pokemon/';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    return response.json(); // Parsear la respuesta como JSON
  })
  .then(data => {
    console.log(data); // Aquí puedes trabajar con los datos
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
