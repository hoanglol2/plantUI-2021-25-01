import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// screens.
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
// style.
import styles from './Navigator.style';
// fontIcon.
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const tabBarLabel = {
  tabBarLabel: '',
};
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: 'center',
          paddingVertical: 15,
          backgroundColor: '#eff4f0',
          elevation: 2,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'star' : 'star';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'heart' : 'heart';
          } else {
            iconName = focused ? 'user' : 'user';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen options={tabBarLabel} name="Home" component={HomeScreen} />
      <Tab.Screen
        options={tabBarLabel}
        name="Favourite"
        component={FavouriteScreen}
      />
      <Tab.Screen
        options={tabBarLabel}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const ScreenOptionStyle = {
  headerShown: false,
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOptionStyle}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
