import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { Navigator } from './src/navigator/Navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: Colors.lighter
  };

  const MyTheme = {
    ...DefaultTheme,
    dcurrentTheme: 'light',
    //dark: false,
    dividerColor: 'rgba(0,0,0,0.6)',
    colors: {
      primary: '#FFFFFF',
      background: '#FFFFFF',
      card: '#000000',
      text: '#000000',
      border: 'black',
      notification: 'teal',
    },
  };

  const AppState = ({ children }: any) => {
    return (
      <PermissionsProvider>
        {children}
      </PermissionsProvider>
    )
  }

  return (
    // <NavigationContainer theme={MyTheme}>
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
}
export default App;
