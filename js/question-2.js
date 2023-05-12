const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=6357c46d96614701a06f6281cb7332e1";

const resultsContainer = document.querySelector(".new-html"); 

async function callApi() {

    const response = await fetch(url);
    
    const results = await response.json();

    const facts = results.results;
  
  resultsContainer.innerHTML = ""
  
    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].name);
        console.log(facts[i].rating);
        console.log(facts[i].tags.length);

        if (i === 8){
            break;
        }

        resultsContainer.innerHTML += `<div>Name: ${facts[i].name}. Rating: ${facts[i].rating}. Number of Tags:  ${facts[i].tags.length} </div>`

    }

}
callApi();

