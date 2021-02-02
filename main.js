// ## HOME SECTION ##
// home Title Animation
const homeTitleList = document.querySelectorAll(".home__title__line");
const homeTitleHighlight = document.querySelector(".home__title__highlight");
const homeTagContainer = document.querySelector(".home__tag__container");



let homeTitleTxtList = [];

// 현재 html에 있는 홈 화면 글자들을 가져와 리스트에 담는다.
homeTitleList.forEach(homeTitle => {
    homeTitleTxtList.push(homeTitle.textContent)
    homeTitle.textContent = "";
});


let textIndex = 1;
let listIndex = 0;                          // homeTitleTxtList index
let isHomeTitleAnimation = false;
const homeTitleAnimation = setInterval(()=>{

    // End home Title Animation => home__title__highlight style change 
    if(isHomeTitleAnimation){
        homeTitleHighlight.style.color = "#fad902";
        homeTitleHighlight.innerHTML = "NEW";
        console.log("homeTitleAnimation End");
        isHomeTitleAnimation = true;

        // home__tag__container animation 시작
        homeTagContainer.style.visibility = "visible";
        homeTagContainer.style.animation = "tag 2s ease-in 1";

        clearInterval(homeTitleAnimation);
    }
    else{
        
        if(homeTitleList[listIndex].textContent.length < homeTitleTxtList[listIndex].length){
            // Home 화면에 해당 인덱스의 문장이 아직 입력되지 않았을 때, 홈 타이틀 애니메이션 진행이 계속됨
            homeTitleList[listIndex].textContent = homeTitleTxtList[listIndex].slice(0, textIndex);
            textIndex += 1;
        }
        else{
            
            if(listIndex < homeTitleList.length - 1){
                // 해당 인덱스의 문장이 입력이 완료 될 경우, 다음 문장으로 넘어간다.
                listIndex += 1;
                textIndex = 0;   
            }
            else{
                // 전체 문장이 입력이 완료되면 해당 애니메이션을 취소한다.
                isHomeTitleAnimation = true;

            }
        }
    }

}, 150);

// ## NAVBAR SECTION ##
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
const navbarIconBox = document.querySelector('.header__navbar__icon');
const navbarIconBurger = document.querySelector('.header__navbar__icon i');
console.log(navbarIconBurger);
let navbarIconState = true;
navbarIconBox.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('navbar__open');

    if(navbarIconState === true){
        navbarIconBurger.classList.remove("fa-bars");
        navbarIconBurger.classList.add("fa-times");
        navbarIconState = false;
    }else{
        navbarIconBurger.classList.remove("fa-times");
        navbarIconBurger.classList.add("fa-bars");
        navbarIconState = true;
    }
    

})

// home screen pade out if scroll
const home = document.querySelector('#home');
// const navbar = document.querySelector('.navbar__menu__item');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
    navbarIconBox.style.opacity = 1 - window.scrollY / homeHeight;

    if(window.scrollY / homeHeight > 1.01){
        navbarIconBox.style.display = 'none';
    }else{
        navbarIconBox.style.display = 'block';
    }

})

// ## SKILL SECTION ##
const skillsContainer = document.querySelector(".skills__container");
const skillTxt = ["HTML", "CSS", "JS", "PYTHON", "REACT", 
"STYLED", "TS", "GIT", "FIGMA", "JIRA"];

for(let i=0 ; i<10; i++){
    const skillIconBox = document.createElement("div");
    skillIconBox.setAttribute("class", "skill__icon__box");
    const skillIconImg = document.createElement("img");
    skillIconImg.setAttribute("class", "skill__icon__img");
    skillIconImg.src = `./IMG/skill/skill${i}.png`;
    const skillIconTxt = document.createElement("h3");
    skillIconTxt.textContent = skillTxt[i];
    skillIconTxt.setAttribute("class", "skill__icon__txt");

    skillIconBox.appendChild(skillIconImg);
    skillIconBox.appendChild(skillIconTxt);
    skillsContainer.appendChild(skillIconBox);
}

// ## PROJECT SECTION ##
const projectdata = [
    {
        "id": 0,
        "imgSrc":"IMG/project/github-brands.png",
        "projectTitle": "Newone",
        "projectDate": "2020.10 - Now",
        "projectDetail": "Education Game for children ",
        "projectPart": "Develop Front-End",
        "projectStacks" : "React.js\nStyled-components",
    },
    {
        "id": 1,
        "imgSrc":"IMG/project/D_Card.png",
        "projectTitle": "D_Card",
        "projectDate": "20.12.07 - 20.12.18",
        "projectDetail": "ICT 콤플렉스 앱 개발 챌린지 공모전 참가작",
        "projectPart": "Develop Front-End",
        "projectStacks" : 'React-Native<br>Styled-components<br>TypeScript',
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

    // 현재 프로젝트 정보
    for(let i=0; i< curProjecdtDesList.length;i++){
        curProjecdtDesList[i].innerHTML = projectdata[clickId][projectDataKeys[i]];
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
