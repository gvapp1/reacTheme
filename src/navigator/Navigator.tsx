import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { MapScreen } from '../screens/MapScreen';


const Stack = createStackNavigator();

export const Navigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // cardStyle: {
                //     backgroundColor: 'transparent'
                // }
            }}
        >
            {

                <Stack.Screen name="MapScreen" component={MapScreen} />
            }
        </Stack.Navigator>
    );
}