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
  anArticle.id = `cocktail_${drinkId}`;
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


const handleClickArticle = (event) => {
  event.preventDefault();
  //console.log(event.currentTarget);
  const domCocktailIdValue = event.currentTarget.id;
  const separatedDomCocktailId = domCocktailIdValue.split('_'); // [cocktail, 123123]
  const cocktailId = separatedDomCocktailId[1];

  if (cocktailIsNotAlreadyFavorite(cocktailId)) {

    addCocktailToFavoriteArray(cocktailId);
    storeFavoriteCocktailsArray();

    createFavoriteCocktailFromArray(cocktailId);
    console.log(domCocktailIdValue);
    paintCocktailFromDom(`#${domCocktailIdValue}`);
  }
};


const paintCocktailFromDom = (domCocktailId) => {
  const cocktail = document.querySelector(domCocktailId);
  cocktail.classList.add('selectedCocktail');
}

const unPaintCocktailFromDom = (cocktailId) => {
  const cocktailListId = `#cocktail_${cocktailId}`;
  const cocktail = document.querySelector(cocktailListId);
  cocktail.classList.remove('selectedCocktail');
}


const storeCocktailsArray = ()=> {
  localStorage.setItem('dataNormal', JSON.stringify(cocktails));
}


const createCocktailsFromArray = () => {
  for (const cocktail of cocktails) {
    createArticle(cocktail.imageUrl, cocktail.name, cocktail.id);
  }
}


const paintCocktailsThatAreFavorites = () => {
  for (const favoriteCocktail of favoriteCocktails) {
    const cocktailIdDom = `#cocktail_${favoriteCocktail.id}`;
    paintCocktailFromDom(cocktailIdDom);
  }
}


const loadCocktailsFromStorage = () => {
  const cocktailsFromStorage = JSON.parse(localStorage.getItem("dataNormal"));
  //console.log(cocktailsFromStorage);

  if (cocktailsFromStorage !== null) {
    cocktails = cocktailsFromStorage;
    createCocktailsFromArray();
    paintCocktailsThatAreFavorites();
  }
};


const doFirstMargaritaSearch = () => {
  renderCocktails('margarita');
};



loadCocktailsFromStorage();

doFirstMargaritaSearch();