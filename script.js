/************************** PROJECT ARRAY OBJECT SECTION **************************************/
const project_array = [
  {
    id: 1,
    title: 'Tonic',
    subtitile: 'CANOPY',
    mid_list : ['Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A more detailed description about the project is expected to be in this section. Please ensure more is loaded',
    list_stack: ['html', 'css', 'javascript'],
    img_source: 'images/Snapshoot_Portfolio.svg',
    button_others: ['See Live', 'See Source'],
    position: 'left',
    sbutton: 'See Project'
  },

  {
    id: 2,
    title: 'Multi-Post Stories',
    subtitile: 'FACEBOOK',
    mid_list : ['Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    list_stack: ['html', 'rails', 'css', 'javascript'],
    img_source: 'images/Snapshoot_PortfolioB.svg',
    button_others: ['See Live', 'See Source'],
    position: 'right',
    sbutton: 'See Project'
  },
  {
    id: 3,
    title: 'Facebook 360',
    subtitile: 'FACEBOOK',
    mid_list : ['Full Stack Dev', '2018'],
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    list_stack: ['html', 'css', 'javascript'],
    img_source: 'images/Snapshoot_PortfolioC.svg',
    button_others: ['See Live', 'See Source'],
    position: 'left',
    sbutton: 'See Project'
  },
  {
    id: 4,
    title: 'Uber Navigation',
    subtitile: 'Uber',
    mid_list : ['Lead Developer', '2015'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    list_stack: ['html', 'css', 'javascript'],
    img_source: 'images/Snapshoot_PortfolioD.svg',
    button_others: ['See Live', 'See Source'],
    position: 'right',
    sbutton: 'See Project'
  },
];


/************************** HAMBURGER SECTION **************************************/
const menuItem = document.querySelector('.mobile-links');
const closeMobileItems = document.querySelectorAll('.closeMenu');
const displayMobileMenu = () => {
  menuItem.style.display = 'block';
};
const closeMobileMenu = () => {
  menuItem.style.display = 'none';
};
document.querySelector('.openMenu').addEventListener('click', displayMobileMenu);
closeMobileItems.forEach(((element) => element.addEventListener('click', closeMobileMenu)));



//Build HTML Element
function buildElement(img_source, title, subtitle, listA, listB, description, StackArray, id, btnText) {
  document.querySelector('#maingrid').innerHTML += `
  <div class="flex-container" id="data-${id}">
  <div class="flex-items" ><img src="${img_source}" alt="Portfolio" /></div>
  <div class="flex-items">
    <h2>${title}</h2>
    <span class="subtitle">${subtitle} </span>
    <span class="mid-list">
      <span class="dot"></span>${listA}
      <span class="dot"></span>${listB}
    </span>
 
    <p class="description">${description}</p>
    <ul class="list-stack">
    ${StackArray.join(' ')}
    </ul>
    <button type="button" class="show_modal"  data-id="${id}">${btnText}</button>
  </div>
 </div>`
}

// Looping the sections

project_array.forEach((projectEl, index, array) => {
 //console.log(...projectEl.mid_list)
 let midList = projectEl.mid_list;
 let listStack = projectEl.list_stack.map(el => {
  return `<li>${el}</li>`;
 });
 buildElement(projectEl.img_source, projectEl.title, projectEl.subtitile, midList[0], midList[1], 
  projectEl.description, listStack, projectEl.id, projectEl.sbutton);
})


/************************** MODAL SECTION **************************************/
var ebModal = document.getElementById('mainModalArea');

// Get the button that opens the modal
//var ebBtn = document.querySelector(".show_modal");
document.querySelectorAll('.show_modal').forEach((row) => row.addEventListener('click', () => displayModal(row.getAttribute('data-id'))));


const displayModal = (j) => { 
  //console.log(project_array[j])
 
  let count = j-1;
  console.log(project_array[count])

  let listStackpop = project_array[count].list_stack.map(el => {
    return `<li>${el}</li>`;
   });


  document.querySelector('#popup-section').innerHTML = `
  <div class="pop-container">
  <h2>${project_array[count].title}</h2>
  <span class="subtitle">${project_array[count].subtitile} </span>
  <span class="mid-list">
    <span class="dot"></span>${project_array[count].mid_list[0]}
    <span class="dot"></span>${project_array[count].mid_list[1]}
  </span>
  <div class="flex-items-pop"><img src="${project_array[count].img_source}" alt="Portfolio" /></div>
  <div class="flex-pop-foot">
    <div class="description">${project_array[count].description}</div>
    <ul class="list-stack"> 
     ${listStackpop.join(' ')}
    </ul>
  </div>
  
  <div>
    <a href='https://ogiogiovictor.github.io/microverse_porfolio_project/' class="btn-see-project">See Live <i class="fa fa-external-link" aria-hidden="true"></i></a>
    <a href='https://github.com/ogiogiovictor' class="btn-see-project">See Source <i class="fa fa-github-square" aria-hidden="true"></i></a>
   </div>
  </div>
  `

  ebModal.style.display = "block";
}
// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("close_modal")[0];

// When the user clicks the button, open the modal 
// ebBtn.onclick = function() {
//     ebModal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}


