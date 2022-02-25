/* variable pokemonRepository to hold what the IIFE will return 
and IIFE assigned to this variable */
let pokemonRepository = (function () {
    // Pokemon list - an array of Pokémon objects used throughout the web app
    let repositoryList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (typeof pokemon === 'object' && 
        'name' in pokemon
        ) {
            repositoryList.push(pokemon);
        } else {
            console.log('Invalid Pokémon, please try again.');
        }
    }
    
    function getAll() {
            return repositoryList;
    }

    function addListItem(item) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let itemButton = document.createElement('button');

        listItem.classList.add('listItem-class');
        itemButton.innerText = item.name;
        itemButton.classList.add('button-class');
        
        listItem.appendChild(itemButton);
        pokemonList.appendChild(listItem);  

        itemButton.addEventListener('click', function (event) {
            showDetails(item);
        });
    }
    
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json(); //This returns a promise
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            //Adds details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();   


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });   
});