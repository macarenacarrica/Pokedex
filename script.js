const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchProductInput');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase(); 
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`; 

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('pokemonCard').style.display = 'block';

            document.getElementById('pokemonName').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            document.getElementById('pokemonImage').src = data.sprites.front_default;
            document.getElementById('pokemonID').textContent = 'ID: ' + data.id;
            document.getElementById('pokemonType').textContent = 'Tipo: ' + data.types.map(type => type.type.name).join(', ');
            document.getElementById('pokemonHeight').textContent = 'Altura: ' + (data.height / 10).toFixed(2) + ' m';
            document.getElementById('pokemonWeight').textContent = 'Peso: ' + (data.weight / 10).toFixed(2) + ' kg';


            const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
            document.getElementById('pokemonAbilities').textContent = 'Habilidades: ' + abilities;
  
        })
        .catch(error => {
            // Manejo de errores
            console.error('Hubo un problema con la solicitud:', error);
            alert(error.message); 
        });
});
