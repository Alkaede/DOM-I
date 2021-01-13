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

// Nav setup

const navA = document.querySelectorAll('nav a');
navA.forEach(el => {
      el.classList.add(`nav-item-1`);
}
);

const n1 = document.querySelector('.nav-item-1');
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

