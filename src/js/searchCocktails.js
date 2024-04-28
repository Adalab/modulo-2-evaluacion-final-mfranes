console.log("search");
const searchInput = document.querySelector(".js_inputSearch");

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

        createArticle(imageUrl, drinkName);

        // console.log(drink.strDrink);
      }
    });
};

