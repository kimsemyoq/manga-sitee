const filterinput = document.getElementById('filter');
const boxes = document.querySelectorAll('.box');
const toggleBtn = document.getElementById("toggle-btn");
const infocontent =document.querySelector('.info-content')
const filrelemecontainer = document.querySelector('.filreleme-container')
const turler = filrelemecontainer.querySelectorAll('a')
const etiketPElements = document.querySelectorAll('.etiket p');
const mangalar = document.querySelectorAll('.box')
const pageitems = document.querySelectorAll('.page-item')
const allmanga = document.querySelector('.one-cikan-mangalar');
const locals = document.querySelectorAll('.addlocal')
let box6 = document.querySelector('.box.no6');
let box7 = document.querySelector('.box.no7');
let box8 = document.querySelector('.box.no8');
let box9 = document.querySelector('.box.no9');
let box10 = document.querySelector('.box.no10');
let localh5 = []
const leftback = pageitems[0]; // en sol
const back = pageitems[1]; // bir geri
const rightback = pageitems[8]; // en sag
const right = pageitems[7]; // sag

let selectedTags = [];
let currentStep = 0;


locals.forEach((local) => {
  local.addEventListener('click', () => {
    let localbox = local.parentElement.parentElement.querySelector('h5').textContent.trim();
    selectedTags.push(localbox)
    localStorage.setItem('items',JSON.stringify(selectedTags))
    
   
  });
});

filterinput.addEventListener('keyup',(e)=>{
  const mangaBoxes = document.querySelectorAll('.box');
  const searchText = e.target.value.toLowerCase()
  mangaBoxes.forEach((box=>{
    const mangaName = box.querySelector('h5').textContent.toLowerCase()

    if(mangaName.includes(searchText)){
      box.style.display = 'block'
      allmanga.style.display = 'flex';
      
      allmanga.style.alignItems = 'center';
      if (box6) box6.style.marginBottom = '60px';
      if (box7) box7.style.marginBottom = '60px';
      if (box8) box8.style.marginBottom = '60px';
      if (box9) box9.style.marginBottom = '60px';
      if (box10) box10.style.marginBottom ='60px';
    }
   
    else{
      box.style.display = 'none'
    }
  }))
})





function filter() {
  let turler = filrelemecontainer.querySelectorAll('li a');
  turler.forEach(function(tur) {
    
  
    tur.addEventListener('click',()=>{
      
      if (tur.style.backgroundColor === 'rgb(22, 140, 97)') {
        tur.style.backgroundColor = '#000';
    } else {
        tur.style.backgroundColor = 'rgb(22, 140, 97)';
    }

    })
   
  });
}

filter()









function filterByTag(tag) { 

    let boxes = document.querySelectorAll('.box');
    
    
    
    if (selectedTags.includes(tag)) {
        // Eğer etiket zaten varsa, çıkar
        selectedTags = selectedTags.filter(t => t !== tag);   //sadece esit olmayanlar kalsin onlari filterele(kaldir)
    
    
        if (box6) box6.style.marginTop = '60px';
        if (box7) box7.style.marginTop = '60px';
        if (box8) box8.style.marginTop = '60px';
        if (box9) box9.style.marginTop = '60px';
        if (box10) box10.style.marginTop ='60px';
        
    } else {
   
        selectedTags.push(tag);
    }
   
    

    if (selectedTags.length === 0) {
        boxes.forEach(function(box) {
            box.style.display = 'block';
           
  
        });
    } 

   else {
   
    boxes.forEach(function(box) {
  
 
        let boxTags = box.querySelector('.etiket').innerText.split('\n').map(tag => tag.trim());

    
        let hasAllSelectedTags = selectedTags.every(selectedTag => boxTags.includes(selectedTag));


        if (hasAllSelectedTags) {
            box.style.display = 'block';
            box.style.marginTop = '0px';
           
            allmanga.style.display = 'flex';
            allmanga.style.justifyContent = 'space-evenly';
            allmanga.style.alignItems = 'center';
       
        } else {
            box.style.display = 'none';
        }
    });
}
}



const startBtn = document.querySelector("#startBtn"),
  endBtn = document.querySelector("#endBtn"),
  prevNext = document.querySelectorAll(".prevNext"),
  numbers = document.querySelectorAll(".link");




const updateBtn = () => {

  if (currentStep === 4) {
    endBtn.disabled = true;
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
  
    startBtn.disabled = true;
    prevNext[0].disabled = true;
  } else {
    endBtn.disabled = false;
    prevNext[1].disabled = false;
    startBtn.disabled = false;
    prevNext[0].disabled = false;
  }
};


numbers.forEach((number, numIndex) => {

  number.addEventListener("click", (e) => {
    e.preventDefault();

    currentStep = numIndex;
  
    document.querySelector(".active").classList.remove("active");
 
    number.classList.add("active");

    updateBtn();
  });
});


prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "next") {
      currentStep += 1;
  } else {
      currentStep -= 1; 
  }

    numbers.forEach((number, numIndex) => {
      
      number.classList.toggle("active", numIndex === currentStep);  
      
      updateBtn(); 
    });
  });
});


startBtn.addEventListener("click", () => {

  document.querySelector(".active").classList.remove("active");

  numbers[0].classList.add("active");
  currentStep = 0;
  
  updateBtn()
  endBtn.disabled = false;
  prevNext[1].disabled = false;
});


endBtn.addEventListener("click", () => {
  
  document.querySelector(".active").classList.remove("active");

  numbers[4].classList.add("active");
  currentStep = 4;

  startBtn.disabled = false;
  prevNext[0].disabled = false;
});
