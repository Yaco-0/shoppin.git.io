const url = 'https://fakestoreapi.com/products';
let gameList;

fetch(url).then((rec)=>{
    return rec.json();
})
.then((recFromServer)=>{
    gameList = recFromServer;
    UiBuild(gameList);
}).catch(()=>{
    console.log("error")
})
const bodyDiv = document.querySelector('.body');
const UiBuild = (gameList)=>{



gameList.forEach(element => {

    gamesTag =`
    <div class="game">
    <img src="${element.image}" alt="" class="image">
            <h2 class="gameName">${element.title}</h2>
            <p style="font-size:15px;">${element.price}</p>
            
    <div>
    `
    bodyDiv.innerHTML += gamesTag;
});
}


const humMenu = document.querySelector(".humMenu");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const humLiMenu = document.querySelector(".humLiMenu");
let isOpen;
humMenu.addEventListener('click',()=>{
    if(isOpen == true){
        line2.classList.remove('hideLine2')
        line1.classList.remove('rotateLine1')
        line3.classList.remove('rotateLine3')
        humLiMenu.classList.remove('increaseHeigh')

        isOpen = false;
    }else{
        line2.classList.add('hideLine2')
        line1.classList.add('rotateLine1')
        line3.classList.add('rotateLine3')
        humLiMenu.classList.add('increaseHeigh')
        isOpen = true;
    }
    
})
let filterProduct = [];
const searchIcon = document.querySelector('.fa-solid');
const searchInputBox = document.querySelector('.search')
searchIcon.addEventListener("click",()=>{
    searchInputBox.style.display = 'block';
    searchIcon.style.display = 'none';

    searchInputBox.addEventListener('change',(e)=>{
        searchIcon.style.display = 'block';
        searchInputBox.style.display = "none";
        const searchTex = e.target.value.toLowerCase();
        filterProduct = gameList.filter( games =>{
            return games.title.toLowerCase().includes(searchTex);
        })
        console.log(filterProduct)
        bodyDiv.innerHTML = "";
        UiBuild(filterProduct)
        
    })
})
