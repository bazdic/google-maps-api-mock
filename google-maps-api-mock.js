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
            OK: 1
        },
        DirectionsTravelMode: {
            DRIVING: 1
        },
        DirectionsUnitSystem: {},
        DistanceMatrixService: function() {},
        DistanceMatrixStatus: {},
        DistanceMatrixElementStatus: {},
        ElevationService: function() {},
        ElevationStatus: {},
        FusionTablesLayer: function() {},
        Geocoder: function() {},
        GeocoderLocationType: {},
        GeocoderStatus: {},
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
        MVCArray: function() {},
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
                getStreetView: function() {}
            };
        },
        MapTypeControlStyle: {},
        MapTypeId: function() {
            return {
                ROADMAP: 1
            };
        },
        MapTypeRegistry: function() {},
        Marker: function () {
            return {
                position: new google.maps.LatLng(),
                positionData: {},
                setMap: function() {},
                set: function () {}
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
        Polygon: function() {},
        Polyline: function () {
            return {
                setMap: function() {},
                getBounds: function() {
                    return new google.maps.LatLngBounds();
                }
            };
        },
        Rectangle: function() {},
        SaveWidget: function() {},
        ScaleControlStyle: {},
        Size: function () {
            return {};
        },
        StreetViewCoverageLayer: function() {},
        StreetViewPanorama: function() {},
        StreetViewPreference: {},
        StreetViewService: function() {},
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
            METRIC: 1
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
