console.log("search");
const btnSearch = document.querySelector(".js_btnSearch");
const searchInput = document.querySelector(".js_inputSearch");
const resetBtn = document.querySelector('.js_resetBtn');


const handleClickSearch = (event) => {
  console.log("handleClickSearch");
  event.preventDefault();

  const searchValue = searchInput.value;
  renderCocktails(searchValue);
};

btnSearch.addEventListener("click", handleClickSearch);

const renderCocktails = (cocktaillName) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktaillName}`;

  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((dataResponse) => {
      // console.log(dataResponse);
      for (const drink of dataResponse.drinks) {
        const imageUrl = drink.strDrinkThumb;
        const drinkName = drink.strDrink;
        const drinkId = `cocktail_${drink.idDrink}`;

        // agregar el coktail a un array
        addDrinkToArray(imageUrl, drinkName, drinkId);
      }

      storeDrinksArray();

      createCocktailsFromArray();
    });
};

const addDrinkToArray = (imageUrl, drinkName, drinkId) => {
  cocktails.push({
    id: drinkId,
    name: drinkName,
    imageUrl: imageUrl,
  });
};

const handleClickReset = ()=>{
  clearCocktails();
};

const clearCocktails = () => {
  const ulListCocktail = document.querySelector(".jsCocktailUl");
  while (ulListCocktail.firstChild) {
    ulListCocktail.removeChild(ulListCocktail.firstChild);
  }
  cocktails = [];
  localStorage.removeItem('dataNormal');
}


resetBtn.addEventListener('click',handleClickReset);