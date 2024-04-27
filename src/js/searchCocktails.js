console.log("search");

const handleClickSearch = (event) => {
  event.preventDefault();
  console.log("handleClickSearch");

  renderCocktails("margarita");
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
