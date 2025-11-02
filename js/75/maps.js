/*global google*/
(async function () {
    'use strict';
    const input = document.querySelector('input');
    const resultul = document.querySelector('#resultul');
    const goButton = document.querySelector('#gobutton');
    const zoomOut = document.querySelector('#zoomout');
    let newBounds;

    let markerArray = [];
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    zoomOut.addEventListener('click', () => {
        map.fitBounds(newBounds);
    });


    const map = new Map(document.getElementById("map"), {
        center: { lat: 40.70343, lng: -73.95081 },
        zoom: 18,
        mapId: 'DEMO_MAP_ID'
    });
    const infoWindow = new InfoWindow();

    goButton.addEventListener('click', async () => {
        if (markerArray.length !== 0) {
            deleteMarkerAndLi();
             zoomOut.style.display = 'none';
        }
        try {
            goButton.innerText = 'searching';
            const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${input.value}&maxRows=10&username=shmielhirsch&type=json`);
            if (!r.ok) {
                throw new Error(`${r.status}-${r.statusText}`);
            }
            const result = await r.json();
            newBounds = new google.maps.LatLngBounds();

            result.geonames.forEach(createplaceLi);
            map.fitBounds(newBounds);

            goButton.innerText = 'go';

        }
        catch (e) {
            console.error(e);
            goButton.innerText = 'try again later';
        }

    });

    function createplaceLi(place) {
        const newli = document.createElement('li');
        const placeimg = document.createElement('img');
        placeimg.src = place.thumbnailImg || 'defult.png';
        newli.innerText = place.title;
        newli.appendChild(placeimg);
        resultul.appendChild(newli);

        newli.addEventListener('click', () => {
            zoomOut.style.display = 'inline-block';
            map.panTo({ lat: place.lat, lng: place.lng });
            setTimeout(() => {
                map.setZoom(18);
            }, 1000);

        });
        newBounds.extend({ lat: place.lat, lng: place.lng });
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
        markerArray.push(marker);
    };

    function deleteMarkerAndLi() {
        markerArray.forEach(marker => {
            marker.setMap(null);
        });
        markerArray = [];
        resultul.innerHTML = '';
    };

}());