console.log('search');
const handleClickSearch = (event) => {
    console.log('handleClickSearch');
    const listSection = document.querySelector('.js_listSection');
    const anArticle = document.createElement('article');
    const cocktailImage = document.createElement('span');
    cocktailImage.textContent='image';
    anArticle.appendChild(cocktailImage);
    const cocktailName = document.createElement('h2');
    cocktailName.textContent = 'Margarita';
    anArticle.appendChild(cocktailName);
    listSection.appendChild(anArticle);

}
btnSearch.addEventListener('click', handleClickSearch);
