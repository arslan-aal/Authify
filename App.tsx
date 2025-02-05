import {} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Signin from './src/screen/Signin';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Login'} component={Login} />
       <Stack.Screen name={'Signin'} component={Signin} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
