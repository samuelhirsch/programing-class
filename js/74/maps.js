/*global google*/
(async function () {
    'use strict';
    const input = document.querySelector('input');
    const resultul = document.querySelector('#resultul');
    const goButton = document.querySelector('button');

    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const bounds = new google.maps.LatLngBounds();

    const map = new Map(document.getElementById("map"), {
        center: { lat: 40.70343, lng: -73.95081 },
        zoom: 18,
        mapId: 'DEMO_MAP_ID'
    });
    const infoWindow = new InfoWindow();

    goButton.addEventListener('click', async () => {
        try {
            goButton.innerText = 'searching';
            const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${input.value}&maxRows=10&username=shmielhirsch&type=json`);
            if (!r.ok) {
                throw new Error(`${r.status}-${r.statusText}`);
            }
            const result = await r.json();

            result.geonames.forEach(createplaceLi);
            map.fitBounds(bounds);
            goButton.innerText = 'go';
        }
        catch (e) {
            console.error(e);
            goButton.innerText = 'try again later';
        }

    });

    function createplaceLi(place) {
        const newli = document.createElement('li');
        newli.innerText = place.title;
        resultul.appendChild(newli);

        newli.addEventListener('click', () => {
            map.panTo({ lat: place.lat, lng: place.lng });
            setTimeout(() => {
                map.setZoom(18);
            },1000);

        });
        bounds.extend({ lat: place.lat, lng: place.lng });
        createMarker(place);
    };

    function createMarker(place) {
        const img = document.createElement('img');
        img.className = 'markerimg';
        img.src = place.thumbnailImg || 'defult.png';
        const marker = new AdvancedMarkerElement({
            map,
            position: { lat: place.lat, lng: place.lng },
            content: img,
            title: place.title

        });

        marker.addListener('click', () => {
            infoWindow.setContent(`${place.summary} <a href="https://${place.wikipediaUrl}">see more</a>`);
            infoWindow.open({
                anchor: marker
            });
        });
    }
}());