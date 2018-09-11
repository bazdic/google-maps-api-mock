window.google = {
    maps: {
        Animation: {},
        BicyclingLayer: function() {},
        Circle: function() {
            return {
                bindTo: function() {},
                getBounds: function() {
                    return new google.maps.LatLngBounds();
                },
                getCenter: function() { return new google.maps.LatLng(); },
                getRadius: function() {},
                setMap: function() {}
            }
        },
        ControlPosition: function() {
            return {
                TOP_LEFT: 1
            };
        },
        Data: function() {},
        DirectionsRenderer: function() {},
        DirectionsService: function() {
            return {};
        },
        DirectionsStatus: {
            OK: "OK"
        },
        DirectionsTravelMode: {
            DRIVING: "DRIVING"
        },
        DirectionsUnitSystem: {},
        DistanceMatrixService: function() {},
        DistanceMatrixStatus: {},
        DistanceMatrixElementStatus: {},
        ElevationService: function() {},
        ElevationStatus: {},
        FusionTablesLayer: function() {},
        Geocoder: function() {
            return {
                geocode: function() {}
            };
        },
        GeocoderLocationType: {},
        GeocoderStatus: {
            OK: "OK"
        },
        GroundOverlay: function() {},
        ImageMapType: function () {},
        InfoWindow: function () {
            return {};
        },
        KmlLayer: function() {},
        KmlLayerStatus: {},
        LatLng: function (lat, lng) {
            return {
                latitude: parseFloat(lat),
                longitude: parseFloat(lng),

                lat: function () { return this.latitude; },
                lng: function () { return this.longitude; }
            };
        },
        LatLngBounds: function (ne, sw) {
            ne = ne != null ? ne : new google.maps.LatLng();
            sw = sw != null ? sw : new google.maps.LatLng();
            return {
                getSouthWest: function () { return sw; },
                getNorthEast: function () { return ne; },
                getCenter: function() {}
            };
        },
        MVCArray: function() {
            return {
                push: function() { }
            };
        },
        MVCObject: function() {},
        Map: function () {
            var controls = [];
            controls[google.maps.ControlPosition.TOP_LEFT] = [];
            return {
                controls: controls,
                getCenter: function() {
                    return new google.maps.LatLng();
                },
                setCenter: function() {},
                getZoom: function() {},
                setZoom: function() {},
                getBounds: function() {
                    return new google.maps.LatLngBounds();
                },
                fitBounds: function() {},
                getProjection: function() {},
                setOptions: function() {},
                getStreetView: function() {
                    return new google.maps.StreetViewPanorama();
                }
            };
        },
        MapTypeControlStyle: {},
        MapTypeId: {
            ROADMAP: "ROADMAP"
        },
        MapTypeRegistry: function() {},
        Marker: function () {
            return {
                position: new google.maps.LatLng(),
                positionData: {},
                setMap: function() {},
                set: function () {},
                getDraggable: function() {}
            };
        },
        MarkerImage: function () {
            return {};
        },
        MaxZoomService: function () {
            return {
                getMaxZoomAtLatLng: function() {}
            };
        },
        MaxZoomStatus: {},
        NavigationControlStyle: {},
        OverlayView: function () {
            return {
                getProjection: function () {},
                setMap: function() {}
            };
        },
        Point: function () {
            return {
                x: 0,
                y: 0
            };
        },
        Polygon: function() {
            return {
                setMap: function() {},
                setPaths: function() {},
                getPath: function() {},
                set: function() {},
                get: function() {}
            };
        },
        Polyline: function () {
            return {
                setMap: function() {},
                getBounds: function() {
                    return new google.maps.LatLngBounds();
                },
                setPath: function() {},
                setOptions: function() {}
            };
        },
        Rectangle: function() {},
        SaveWidget: function() {},
        ScaleControlStyle: {},
        Size: function () {
            return {};
        },
        StreetViewCoverageLayer: function() {},
        StreetViewPanorama: function() {
            return {
                getVisible: function() {},
                setVisible: function() {},
                setPov: function() {},
                setPosition: function() {}
            }
        },
        StreetViewPreference: {},
        StreetViewService: function() {
            return {
                getPanoramaByLocation: function() {}
            };
        },
        StreetViewStatus: {},
        StreetViewSource: {},
        StrokePosition: {},
        StyledMapType: function() {},
        SymbolPath: {},
        TrafficLayer: function() {
            return {
                setMap: function() {}
            };
        },
        TrafficModel: function () {},
        TransitLayer: function() {},
        TransitMode: {},
        TransitRoutePreference: {},
        TravelMode: {},
        UnitSystem: {
            METRIC: 0,
            IMPERIAL: 1
        },
        ZoomControlStyle: {},
        __gjsload__: function() {},
        event: {
            trigger: function() {},
            addListener: function() {},
            addListenerOnce: function() {},
            removeListener: function() {},
            clearInstanceListeners: function() {}
        },
        places: {
            AutocompleteService: function () {
                return {
                    getPlacePredictions: function() {}
                };
            }
        }
    }
};
