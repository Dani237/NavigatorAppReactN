import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyStack } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width, height } = useWindowDimensions();

    return (
        
        <Drawer.Navigator
            initialRouteName='Pagina1Screen'
            screenOptions={{ 
                drawerType: width >= height ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: width >= height ? false : true, // Oculta la hamburguesa
                
            }}
        >
        <Drawer.Screen name="MyStack" options={{ title:"Home" }} component={ MyStack } />
        <Drawer.Screen name="SettingsScreen" options={{ title:"Settings" }} component={ SettingsScreen } />
        </Drawer.Navigator>
    );
}