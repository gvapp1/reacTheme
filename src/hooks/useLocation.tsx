import Geolocation from "@react-native-community/geolocation";
import { useEffect, useState } from "react";
import { Location } from "../interfaces/appInterfaces";

export const useLocation = () => {

    const [hasLocation, setHastLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });

    useEffect(() => {
        getCurrenLocation()
            .then(location => {
                setInitialPosition(location);
                setHastLocation(true);
            }).catch(err => console.log({ err }));
    }, []);

    const getCurrenLocation = (): Promise<Location> => {
        return new Promise<Location>((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });
                },
                (err) => reject({ err }), { enableHighAccuracy: true },
            );
        });
    }

    return {
        hasLocation,
        initialPosition,
        getCurrenLocation
    }

}