import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Screen
import GetStartedScreen from "../pages/getstarted/GetStartedScreen";
import LoginScreen from "../pages/login/LoginScreen";

const Stack: any = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="GetStarted" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="GetStarted"
        component={GetStartedScreen} />

      <Stack.Screen
        name="Login"
        component={LoginScreen} />

    </Stack.Navigator>
  );
};

export default StackNavigator;