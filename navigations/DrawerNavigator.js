import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/about';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import {MainStackNavigator, AboutStackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home"
                component={MainStackNavigator}
            />
            <Drawer.Screen 
                name="About"
                component={AboutStackNavigator}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator