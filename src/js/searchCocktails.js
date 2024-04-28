console.log("search");
const btnSearch = document.querySelector('.js_btnSearch');
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
        const drinkId = drink.idDrink;

        // agregar el coktail a un array
        addDrinkToArray(imageUrl, drinkName, drinkId);
        createArticle(imageUrl, drinkName);

      }

      console.log(drinks);

      // createArticles();
    });
};

const addDrinkToArray = (imageUrl, drinkName, drinkId) => {
  drinks.push(
    {
      id: drinkId,
      name: drinkName,
      imageUrl: imageUrl
    }
  );
};

