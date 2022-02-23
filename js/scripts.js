let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 7,
        types: ['grass', 'poison']
    },
    {
        name: 'Charmander',
        height: 6,
        types: ['fire']
    },
    {
        name: 'Butterfree',
        height: 11,
        types: ['bug', 'flying']
    },
    {
        name: 'Nidoqueen',
        height: 13,
        types: ['poison', 'ground']
    }
];

//for loop to display the name and height of each pokemon in the array to the DOM
//add remark to highlight big pokemon
for (let i=0; i < repository.length; i++) {
    if (repository[i].height < 9) {
        document.write("<p>" + repository[i].name + " (height: " + repository[i].height + ") "  + "</p>")
    } else {
      document.write("<p>" + repository[i].name + " (height: " + repository[i].height + ") " + "-Wow, that's a big Pokemon!" + "</p>")
    }
} 