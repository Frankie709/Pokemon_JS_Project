// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//Program will retrive a pokemon sprite from base url, according to ending we add to url,
//and we will append those pokemon divs to the webpage
const container = document.querySelector('#container');

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

//loop through 151 pokemon, create new div's, and append them to our container
for (let i = 1; i <= 151; i++) {
    //create div container for each pokemon
    const pokemon = document.createElement('div');
    //Add class
    pokemon.classList.add('pokemon');
    //Create label and add text
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    //Create and retrieve img
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    //Append img and label to container
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}


