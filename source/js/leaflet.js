const map = L.map('map').setView([59.968328, 30.317344], 17);
const locationPicture = document.querySelector('.location__map-picture')

locationPicture.classList.remove('location__map-picture--nojs');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const leafletIcon = L.icon ({
  iconUrl: ('../img/icons/stack.svg#map-pin'),
  iconSize: [38, 50]
})

const marker = L.marker([59.968328, 30.31750], {icon:leafletIcon}).addTo(map);

export {marker , map }
