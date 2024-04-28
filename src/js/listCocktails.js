console.log("list");

const createArticle = (imageUrl, drinkName, drinkId) => {
  let imageUrlWithDefault = imageUrl;
  if (imageUrl === null) {
    imageUrlWithDefault =
      "https://via.placeholder.com/150x150/ffffff/666666/?text=no%20image";
  }
  const listSection = document.querySelector(".js_listSection");
  listSection.classList.add("s_listSection");
  const ulListCocktail = document.querySelector(".jsCocktailUl");

  ulListCocktail.classList.add("s_listSection__ul");
  const listElement = document.createElement("li");
  listSection.appendChild(ulListCocktail);
  ulListCocktail.appendChild(listElement);

  const anArticle = document.createElement("article");
  anArticle.id = drinkId;
  anArticle.addEventListener("click", handleClickArticle);

  const cocktailImage = document.createElement("img");
  cocktailImage.src = imageUrlWithDefault;
  cocktailImage.classList.add("s_listSection__cocktailThumbnail");
  anArticle.appendChild(cocktailImage);
  const cocktailTitle = document.createElement("h2");
  cocktailTitle.textContent = drinkName;
  anArticle.appendChild(cocktailTitle);
  listElement.appendChild(anArticle);
};

const createArticles = () => {
  for (const cocktail of cocktails) {
    createArticle(cocktail.imageUrl, cocktail.name, cocktail.id);
  }
}

const handleClickArticle = (event) => {
  event.preventDefault();
  //console.log(event.currentTarget);
  const cocktailId = event.currentTarget.id;

  if (cocktailIsNotAlreadyFavorite(cocktailId)) {

    addCocktailToFavoriteArray(cocktailId);
    storeFavoriteDrinksArray();

    createFavoriteCocktailFromArray(cocktailId);
    painSelectedCocktail(cocktailId);
  }
};

const painSelectedCocktail = (cocktailId) => {
  const cocktail = document.querySelector(`#${cocktailId}`);
  cocktail.classList.add('selectedCocktail');
}

const storeDrinksArray = ()=> {
  localStorage.setItem('dataNormal', JSON.stringify(cocktails));
}
