import React, { useRef } from "react";
import MapView, { MapMarkerProps, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useLocation } from "../hooks/useLocation";
import { LoadinScreen } from "../screens/LoadinScreen";
import { Fab } from "./Fab";

interface Props {
    markers?: MapMarkerProps[];
}

export const Map = ({ markers }: Props) => {

    const { hasLocation, initialPosition, getCurrenLocation } = useLocation();
    const mapViewRef = useRef<MapView>();

    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrenLocation();
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
        });
    }


    if (!hasLocation) {
        return <LoadinScreen />
    }
    return (
        <>
            <MapView
                ref={(el) => mapViewRef.current = el!}
                style={{ flex: 1 }}
                showsUserLocation
                //provider={PROVIDER_GOOGLE} // remove if not using Google Maps y tomaras el default de tu plataforma
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/* <Marker
                    image={require('../assets/custom-marker.png')}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="Esto es un titulo"
                    description="Esto es una descripción del marcador"
                /> */}
            </MapView>
            <Fab
                iconName="compass-outline"
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                }}
            />
        </>
    );
}