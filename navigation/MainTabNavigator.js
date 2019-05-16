import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';

import ShootOptions from '../screens/ShootOptions';

import ImagePreview from '../screens/ImagePreview'
import InteriorShootNow from '../screens/InteriorShootNow';
import MiscShootNow from '../screens/MiscShootNow';
import CustomShootScreen from '../screens/CustomShootScreen';



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ImagePreviewStack = createStackNavigator({
  imagePreview: ImagePreview,
});

ImagePreviewStack.navigationOptions = {
  tabBarLabel: 'Image Preview',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};



const ShootOptionsStack = createStackNavigator({
  ShootNow: ShootOptions,
  InteriorShoot: InteriorShootNow,
  MiscShoot: MiscShootNow,
  CustomShootScreen: CustomShootScreen,
});

ShootOptionsStack.navigationOptions = {
 
};
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  

  SettingsStack,
  
  LoginStack,
  HomeStack,

  ShootOptionsStack,

  ImagePreviewStack,
});

