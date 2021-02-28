// WEBP

function testWebP(callback) {
   let webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

// .ibg

function ibg() {
   let ibg = document.querySelectorAll('.ibg');
   for (let i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage =
            'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();

// HAMBURGER
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   menu.classList.toggle('active');
   scroll_stop();
});

function scroll_stop() {
   if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'auto';
   }
}

// TABS

window.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let tabNavs = document.querySelectorAll('.news-nav__item');
   let tabNavAll = document.querySelector('.news-nav__item[data-tab="all"]');
   let tabPanels = document.querySelectorAll('.news-item');

   for (let i = 0; i < tabNavs.length; i++) {
      tabNavs[i].addEventListener('click', function (e) {
         e.preventDefault();
         let activeTabAttr = e.target.getAttribute('data-tab');

         for (let j = 0; j < tabPanels.length; j++) {
            let contentAttr = tabPanels[j].getAttribute('data-tab-content');
            if (activeTabAttr === contentAttr && activeTabAttr !== 'all') {
               tabNavs.forEach((element) => {
                  element.classList.remove('active');
               });
               tabNavs[i].classList.add('active');
               tabPanels[j].classList.add('active');
            } else if (activeTabAttr === 'all') {
               tabPanels[j].classList.add('active');
               tabNavs[j].classList.remove('active');
               tabNavAll.classList.add('active');
            } else {
               tabNavs[j].classList.remove('active');
               tabPanels[j].classList.remove('active');
            }
         }
      });
   }
});

// GOOGLE MAP

let script = document.createElement('script');
script.src =
   'https://maps.googleapis.com/maps/api/js?key=AIzaSyCEWyAk9opnwPd5StFqVrrqaaUKpNnKP8s&callback=initMap';
script.async = true;

let map;
window.initMap = function () {
   map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 51.89091258262199, lng: 17.393847161373518 },
      zoom: 3,
      styles: [
         {
            stylers: [
               {
                  hue: '#2c3e50',
               },
               {
                  saturation: 250,
               },
            ],
         },
         {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
               {
                  lightness: 50,
               },
               {
                  visibility: 'simplified',
               },
            ],
         },
         {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
               {
                  visibility: 'off',
               },
            ],
         },
      ],
   });
   let marker_sw = new google.maps.Marker({
      position: { lat: 64.15211521325051, lng: 16.285190354510817 },
      map: map,
      title: 'We are in Sweden',
      icon: 'img/about/marker.svg',
   });
   let marker_nw = new google.maps.Marker({
      position: { lat: 61.76563466771849, lng: 9.394989860038887 },
      map: map,
      title: 'We are in Norway',
      icon: 'img/about/marker.svg',
   });
   let marker_de = new google.maps.Marker({
      position: { lat: 50.67945341940586, lng: 9.581223581709363 },
      map: map,
      title: 'We are in Germany',
      icon: 'img/about/marker.svg',
   });
   let marker_sp = new google.maps.Marker({
      position: { lat: 39.27508272963089, lng: -4.200071821905046 },
      map: map,
      title: 'We are in Spain',
      icon: 'img/about/marker.svg',
   });
   let marker_it = new google.maps.Marker({
      position: { lat: 42.44325078351154, lng: 12.374729406766338 },
      map: map,
      title: 'We are in Italy',
      icon: 'img/about/marker.svg',
   });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
