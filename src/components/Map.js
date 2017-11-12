import React, { Component }  from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import Marker from '../images/marker.png';

class Map extends Component {
    _initMap () {
        mapboxgl.accessToken = 'pk.eyJ1Ijoiam96b2xyIiwiYSI6ImNpb2s3Yzd2djAwYWp3NGo3MGt3ZXdrNTIifQ.2m8GOnXNS3SylfenQr194Q';

        const map = new mapboxgl.Map({
            "container": 'map',
            "style": 'mapbox://styles/mapbox/streets-v9',
            "zoom": 14,
            "center": [2.345, 48.887]
        });

        map.scrollZoom.disable();

        map.on('load', () => {
            map.loadImage(Marker, (error, image) => {
                if (error) throw error;
                map.addImage('marker', image);
                map.addLayer({
                    "id": 'points',
                    "type": 'symbol',
                    "source": {
                        "type": 'geojson',
                        "data": {
                            "type": 'FeatureCollection',
                            "features": [{
                                "type": 'Feature',
                                "geometry": {
                                    "type": 'Point',
                                    "coordinates": [2.345, 48.887]
                                },
                                "properties": {
                                    "description": '<strong> Le Griffe </strong>' +
                                    '<p> 12 Grande Rue <br>' +
                                    '91580 ' +
                                    'Villeconin </p>'
                                }
                            }]
                        }
                    },
                    "layout": {
                        'icon-image': 'marker',
                        'icon-size': 0.2,
                        'icon-allow-overlap': true
                    }
                });
            });
        });

        map.on('click', 'points', function (e) {
            new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(e.features[0].properties.description)
                .addTo(map);
        });

        map.on('mouseenter', 'points', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'points', function () {
            map.getCanvas().style.cursor = '';
        });
    }

    componentDidMount () {
        this._initMap();
    }

    render () {
        return (
            <div className="map" id="map">
            </div>
        );
    }
}

export default Map;
