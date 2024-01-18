import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../screens/MapScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { useContext } from 'react';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadinScreen } from '../screens/LoadinScreen';

const Stack = createStackNavigator();

export const Navigator = () => {

    const { permissions } = useContext(PermissionsContext);
    if (permissions.locationStatus === 'unavailable') {
        return <LoadinScreen />
    }
    return (
        <Stack.Navigator
            //initialRouteName='PermissionsScreen'
            screenOptions={{
                headerShown: false,
                // cardStyle: {
                //     backgroundColor: 'transparent'
                // }
            }}
        >
            {
                (permissions.locationStatus === 'granted')
                    ? <Stack.Screen name="MapScreen" component={MapScreen} />
                    : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
            
            }            
        </Stack.Navigator>
    );
}