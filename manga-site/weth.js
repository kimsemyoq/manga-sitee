const mangaicon = document.getElementById('mangaicon');
const dotsitem = document.querySelectorAll('.dots li');
const rights = document.querySelectorAll('.angel-right');
const lefts = document.querySelectorAll('.angel-left');
const slider = document.querySelector('.onerilen-image');
const img = document.querySelector('.slide img');
const slides = document.querySelectorAll('.slide');
const infostext = document.querySelectorAll('.info-onerilen');
const buttonread = document.querySelectorAll('.read-manga');
const secilenler = document.querySelector('.secilenler p');
const bulunanlar = document.querySelector('.bulunanlar')
let acik = false
let autoslider
let currentindex = 0;
updateSlider()
/*document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
     autoslider = setInterval(()=>{
        currentindex++
        if(currentindex>=dotsitem.length){
            currentindex = 0
        }
        updateSlider()
    },3000)
}); */



secilenler.addEventListener('click', () => {
   
    if(acik==true){
        bulunanlar.style.display = 'none'
        acik = false
    }
    else{
        bulunanlar.innerHTML = ''
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            const parsedItems = JSON.parse(storedItems);
            parsedItems.forEach((item) => {
                const petiketi = document.createElement('p');
                bulunanlar.appendChild(petiketi);
                petiketi.textContent = item;
                petiketi.style.animation = 'slideIn forwards linear 0.4s';
            });
        }
         bulunanlar.style.display = 'block'
         acik = true

    }
});

mangaicon.addEventListener('click', function() {
    window.location.href = 'wet.html';
});

// 'dotsitem' dizisi üzerinde gezinerek tıklanan öğeye 'active-dost' sınıfını ekleme
dotsitem.forEach((item, index) => {
    item.addEventListener('click', () => {
        clearInterval(autoslider)
        currentindex = index;
        document.querySelector('.active-dost').classList.remove('active-dost');
        item.classList.add('active-dost');
        updateSlider();
    });
});

rights.forEach((right) => {
    right.addEventListener('click', () => {
        currentindex++;
        if (currentindex == dotsitem.length) {
            currentindex = 0;
            slider.scrollLeft = 0; //scrolla olan sol boşluğu 0 yap
        }
        document.querySelector('.active-dost').classList.remove('active-dost');
        dotsitem[currentindex].classList.add('active-dost');
        slider.scrollLeft = img.width;
        updateSlider();
    });
});

lefts.forEach((left) => {
    left.addEventListener('click', () => {
        currentindex--;
        if (currentindex < 0) {
            currentindex = dotsitem.length - 1; // currentindex 4 olur, 4 ise en sağdır
        }
        document.querySelector('.active-dost').classList.remove('active-dost');
        dotsitem[currentindex].classList.add('active-dost');
        updateSlider();
    });
});

function updateSlider() {
    // Slaytları güncelle
    switch (currentindex) {
        case 0:
            slides.forEach((slide, index) => {
                if (index === 0) {
                    slide.classList.remove('kapali');
                } else {
                    slide.classList.add('kapali');
                }
            });
            break;

        case 1:
            slides.forEach((slide, index) => {
                if (index === 1) {
                    slide.classList.remove('kapali');
                } else {
                    slide.classList.add('kapali');
                }
            });
            break;

        case 2:
            slides.forEach((slide, index) => {
                if (index === 2) {
                    slide.classList.remove('kapali');
                } else {
                    slide.classList.add('kapali');
                }
            });
            break;

        case 3:
            slides.forEach((slide, index) => {
                if (index === 3) {
                    slide.classList.remove('kapali');
                } else {
                    slide.classList.add('kapali');
                }
            });
            break;

        case 4:
            slides.forEach((slide, index) => {
                if (index === 4) {
                    slide.classList.remove('kapali');
                } else {
                    slide.classList.add('kapali');
                }
            });
            break;

        case 5:
            slides.forEach((slide, index) => {
                if (index === 5) {
                    slide.classList.remove('kapali');
                } else {
                    slide.classList.add('kapali');
                }
            });
            break;

        default:
            slides.forEach((slide) => {
                slide.classList.add('kapali');
            });
            break;
    }

    // Nokta işaretlerini güncelle
    document.querySelector('.active-dost').classList.remove('active-dost');
    dotsitem[currentindex].classList.add('active-dost');

    // Diğer öğeleri güncelle
    buttonread.forEach((button) => {
        button.style.animation = 'slideopacity 2s forwards ease-in';
    });
    infostext.forEach((info) => {
        info.style.animation = 'slideopacity 2s forwards ease-in';
    });
}