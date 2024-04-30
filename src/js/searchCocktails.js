console.log("search");
const btnSearch = document.querySelector(".js_btnSearch");
const searchInput = document.querySelector(".js_inputSearch");
const resetBtn = document.querySelector(".js_resetBtn");

const handleClickSearch = (event) => {
  console.log("handleClickSearch");
  event.preventDefault();

  const searchValue = searchInput.value;
  clearCocktails();
  renderCocktails(searchValue);
};
btnSearch.addEventListener("click", handleClickSearch);

const handleClickReset = () => {
  clearCocktails();
};
resetBtn.addEventListener("click", handleClickReset);


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
        const drinkId = drink.idDrink;

        // agregar el coktail a un array
        addCocktailToArray(imageUrl, drinkName, drinkId);
      }

      storeCocktailsArray();

      createCocktailsFromArray();

      paintCocktailsThatAreFavorites();
    });
};


const doFirstMargaritaSearch = () => {
  renderCocktails("margarita");
};
