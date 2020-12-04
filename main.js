// home Title Animation

const homeTitleList = document.querySelectorAll(".home__title__line");
const homeTitleHighlight = document.querySelector(".home__title__highlight");

let homeTitleTxtList = [];

//home Title Get and init
homeTitleList.forEach(homeTitle => {
    homeTitleTxtList.push(homeTitle.textContent)
    homeTitle.textContent = "";
});


let textIndex = 1;
let listIndex = 0;
let isHomeTitleAnimation = false;
const homeTitleAnimation = setInterval(()=>{

    // End home Title Animation => home__title__highlight style change 
    if(isHomeTitleAnimation){
        homeTitleHighlight.style.color = "#fad902";
        homeTitleHighlight.innerHTML = "NEW";
        console.log("homeTitleAnimation End");
        isHomeTitleAnimation = true;

        clearInterval(homeTitleAnimation);
        
    }
    else{
        if(homeTitleList[listIndex].textContent.length < homeTitleTxtList[listIndex].length){
            homeTitleList[listIndex].textContent = homeTitleTxtList[listIndex].slice(0, textIndex);
            textIndex += 1;
        }
        else{
            if(listIndex < homeTitleList.length - 1){
                listIndex += 1;
                textIndex = 0;   
            }
            else{
                isHomeTitleAnimation = true;

            }
        }
    }

}, 150);

// Go to tag screen if navbar menu click
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    

    if(link === null){
        return;
    }
    enterView(link);
});

const navbarMouseIcon = document.querySelector(".home__mouse__img");
console.log(navbarMouseIcon);
navbarMouseIcon.addEventListener('click', (event)=>{
 
    enterView("#contact");
});

function enterView(selector){
    const tmp = document.querySelector(selector);
    tmp.scrollIntoView({behavior: 'smooth'});
}

// Navbar icon click event on mobile screen
const navbarIcon = document.querySelector('.header__navbar__icon');
navbarIcon.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('navbar__open')

})

// home screen pade out if scroll
const home = document.querySelector('#home');
// const navbar = document.querySelector('.navbar__menu__item');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
    navbarIcon.style.opacity = 1 - window.scrollY / homeHeight;
    // navbar.style.opacity = 1 - window.scrollY / homeHeight;
})

const projectdata = [
    {
        "id": 0,
        "imgSrc":"IMG/project/github-brands.png",
        "projectTitle": "Mole Pang",
        "projectDate": "2020.10 - Now",
        "projectDetail": "Education Game for children ",
        "projectPart": "Develop Front-End",
        "projectStacks" : "React.js\nStyled-components",
    },
    {
        "id": 1,
        "imgSrc":"IMG/project/apple3.jpg",
        "projectTitle": "Used Goods Trade Site",
        "projectDate": "2020.11 - Now",
        "projectDetail": "edu1",
        "projectPart": "Develop Front-End1",
        "projectStacks" : "React.js\nStyled-components1",
    },
    {
        "id": 2,
        "imgSrc":"IMG/project/apple4.jpg",
        "projectTitle": "Used Goods Trade Site",
        "projectDate": "2020.12 - Now",
        "projectDetail": "Edu2",
        "projectPart": "Develop Front-End2",
        "projectStacks" : "React.js\nStyled-components2",
    }
]
// = document.querySelector(".slider__img__box");
const projectBoxContainer = document.querySelector(".img__box__container");
let projectSliderImgList = [];

// project slider img show
(()=>{

    projectdata.forEach((data)=>{

        let projectSliderImg = document.createElement("img");
        projectSliderImg.src = data.imgSrc;
        projectSliderImg.setAttribute("class", "slider__img__box");
        projectSliderImg.setAttribute("data-id", data.id);
        // console.log(projectSliderImg);

        projectBoxContainer.appendChild(projectSliderImg);
        projectSliderImgList.push(projectSliderImg);
    })

})();


const curProjectImg = document.querySelector(".project__img__box img");
const curProjecdtDesList = document.querySelectorAll(".project__description .project__text");

const projectDataKeys = Object.keys(projectdata[0]).splice(2,5);
console.log(projectDataKeys);
// if project slider img click > show detailed project
projectBoxContainer.addEventListener("click", (event)=>{
    if(event.target.dataset.id === undefined){
        return;
    }
    let clickId = event.target.dataset.id;
    curProjectImg.src = projectdata[clickId].imgSrc;

    for(let i=0; i< curProjecdtDesList.length;i++){
        curProjecdtDesList[i].textContent = projectdata[clickId][projectDataKeys[i]];
    }
}
);

const projectSliderLeftBtn = document.querySelector(".slider__left__btn");
const projectSliderRightBtn = document.querySelector(".slider__right__btn");
console.log(projectSliderRightBtn);

projectSliderLeftBtn.addEventListener("click",()=>{
    projectBoxContainer.scrollLeft -= 50;
});

projectSliderRightBtn.addEventListener("click",()=>{
    projectBoxContainer.scrollLeft += 50;
    
});
