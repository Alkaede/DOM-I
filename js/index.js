const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//                                     Nav setup

const navA = document.querySelectorAll('nav a');
navA.forEach(el => {
      el.classList.add(`nav-item-1`);
}
);

const n1 = document.querySelector('.nav-item-1'); //i swear there has to be an easier way to do this 
n1.textContent = 'Services';
const n2 = n1.nextElementSibling;
n2.className = 'nav-item-2';
n2.textContent = 'Product';
const n3 = n2.nextElementSibling;
n3.className = 'nav-item-3';
n3.textContent = 'Vision';
const n4 = n3.nextElementSibling;
n4.className = 'nav-item-4';
n4.textContent = 'Features';
const n5 = n4.nextElementSibling;
n5.className = 'nav-item-5';
n5.textContent = 'About';
const n6 = n5.nextElementSibling;
n6.className = 'nav-item-6';
n6.textContent = 'Contact';

//                                     cta setup

const ctaH = document.querySelector('.cta-text h1');
ctaH.textContent = 'DOM Is Awesome';
const ctaB = ctaH.nextElementSibling;
ctaB.textContent = 'Get Started';
const ctaI = document.querySelector('.cta img');
ctaI.src = 'img/header-img.png';


//                                      main content setup

//feature
const feat = document.querySelector('.text-content h4');
feat.className = 'feature-h4';
feat.textContent = 'Features';
const fCont = feat.nextElementSibling;
fCont.className = 'features-content';
fCont.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//about
const about = document.querySelector('.text-content');
const rAbout = about.nextElementSibling;
const aH = rAbout.querySelector('.text-content h4');
aH.className = 'about-h4';
aH.textContent = 'About';
const aC = aH.nextElementSibling;
aC.className = 'about-content';
aC.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//image
const midI = document.querySelector('#middle-img');
midI.src = 'img/mid-page-accent.jpg'

//bottom content, lets try something new
const bot = document.querySelectorAll('.bottom-content .text-content h4');
bot[0].className = 'services-h4';
bot[0].textContent = 'Services';
bot[1].className = 'product-h4';
bot[1].textContent = 'Product';
bot[2].className = 'vision-h4';
bot[2].textContent = 'Vision';

//I could have probably set all the lorum ipsum passages/content as variables and just allowed the textcontent
//to equal the variables that hold the lorum ipsum

const botT = document.querySelectorAll('.bottom-content .text-content p');
botT[0].className = 'services-content';
botT[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
botT[1].className = 'product-content';
botT[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
botT[2].className = 'vision-content';
botT[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//                                          Contact

const cont = document.querySelector('.contact');
// const aCont = Array.from(cont.childNodes);


// console.log(aCont);
// const testing = aCont.map(el => {
//   if(el.nodeName === 'text'){
//     el.removeChild(el.);
//   }
// })
// console.log(testing);



//maybe proper way of doing it? 
const newDiv = document.createElement('div');
cont.appendChild(newDiv);
const newH = document.createElement('h4');
newDiv.appendChild(newH);
const newP1 = document.createElement('p');
newDiv.appendChild(newP1);
const newP2 = document.createElement('p');
newDiv.appendChild(newP2);
const newP3 = document.createElement('p');
newDiv.appendChild(newP3);


const divH = newDiv.querySelector('h4');
divH.textContent = 'Contact';
divH.className = 'contact-h4';

const p = newDiv.querySelectorAll('p');
p[0].textContent = '123 Way 456 Street Somewhere, USA';
p[0].className = 'address';
p[1].textContent = '1 (888) 888-8888';
p[1].className = 'phone';
p[2].textContent = 'sales@greatidea.io';
p[2].className = 'email';



//                                                  Footer

const foot = document.querySelector('footer');
foot.className = 'copyright';
foot.textContent = 'Copyright Great Idea! 2018';



// ignore this, just scratch code will delete later

// const firA = document.querySelector(".nav-item-1");
// firA.textContent = "Services";
// document.querySelector("nav").appendChild(firstNav);

// const firstNav = document.querySelector('nav a');
// firstNav.textContent = "Services";
// document.querySelector("nav").appendChild(firstNav);

// const sndNav = firstNav.nextElementSibling;
// sndNav.textContent = "Product";
// console.log(sndNav);
// document.querySelector("nav").appendChild(sndNav);

