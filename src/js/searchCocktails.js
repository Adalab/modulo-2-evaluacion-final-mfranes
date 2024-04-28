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
        let imageUrl = drink.strDrinkThumb;
        if (imageUrl === null) {
          imageUrl =
            "https://via.placeholder.com/150x150/ffffff/666666/?text=no%20image";
        }
        const drinkName = drink.strDrink;

        createArticle(imageUrl, drinkName);

        // console.log(drink.strDrink);
      }
    });
};

