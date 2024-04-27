console.log("search");
const handleClickSearch = (event) => {
  console.log("handleClickSearch");
  
  renderCocktails("margarita"); 
};
btnSearch.addEventListener("click", handleClickSearch);

const createArticle = (imageUrl, cocktaillName) => {
  const listSection = document.querySelector(".js_listSection");

  const ulListCocktail = document.createElement("ul");
  const listElement = document.createElement("li");
  listSection.appendChild(ulListCocktail);
  ulListCocktail.appendChild(listElement);

  const anArticle = document.createElement("article");
  const cocktailImage = document.createElement("span");
  cocktailImage.textContent = imageUrl;
  anArticle.appendChild(cocktailImage);
  const cocktailTitle = document.createElement("h2");
  cocktailTitle.textContent = cocktaillName;
  anArticle.appendChild(cocktailTitle);
  listElement.appendChild(anArticle);
};

const renderCocktails = (cocktaillName) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktaillName}`;

 return fetch(url, {
    method: "GET"
  })
    .then((response) => response.json())
    .then((dataResponse) => {
      // console.log(dataResponse);
      for (const drink of dataResponse.drinks) {
        const imageUrl =drink.strDrinkThumb;
        const drinkName = drink.strDrink;
        
        createArticle(imageUrl,drinkName);

        // console.log(drink.strDrink);
      }
    });
};
