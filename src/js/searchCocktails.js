console.log('search');
const handleClickSearch = (event) => {
    console.log('handleClickSearch');
    createArticle('urlImage', 'Cocktail1');
    createArticle('urlImage2', 'Cocktail2');

}
btnSearch.addEventListener('click', handleClickSearch);

const createArticle = (imageUrl, cocktailTitle) => {
    const listSection = document.querySelector('.js_listSection');
    const anArticle = document.createElement('article');
    const cocktailImage = document.createElement('span');
    cocktailImage.textContent= imageUrl;
    anArticle.appendChild(cocktailImage);
    const cocktailName = document.createElement('h2');
    cocktailName.textContent = cocktailTitle;
    anArticle.appendChild(cocktailName);
    listSection.appendChild(anArticle);
}