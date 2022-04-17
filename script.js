

let btnMenu = document.querySelector('#btnMenu');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menuItem')
let productImage = document.querySelectorAll('.item-img');


// responsive navbar
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    menuItem.forEach((item) => {
        item.style.opacity = '90%';
    })

});

//product slideshow using toggle (downside:no ctrl over transition)
const slideShow = () => {
    productImage.forEach(img => {
        img.classList.toggle('hidden');
    });
}
setInterval(slideShow, 3000);

//maps
var map;

function GetMap() {

    var storeLocation = new Microsoft.Maps.Location(46.03966, 14.49442);

    map = new Microsoft.Maps.Map('#myMap', {
        // credentials: 'Your Bing Maps Key',
        center: storeLocation,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 16,
        disableScrollWheelZoom: true,
        disablePanning: true
    });

    var pin = new Microsoft.Maps.Pushpin(storeLocation, {
        title: 'Altiplana',
        subTitle: 'Trnovo',
        text: 'A',
    });
    map.entities.push(pin);

    //Add your post map load code here.

}