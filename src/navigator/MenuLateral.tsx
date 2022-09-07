import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { MyStack } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width, height } = useWindowDimensions();

    return (
        
        <Drawer.Navigator
            initialRouteName='Pagina1Screen'
            screenOptions={{ 
                drawerType: width >= height ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: width >= height ? false : true, // Oculta la hamburguesa
                
            }}
            drawerContent={ (props) => <MenuInterno {...props} /> }
        >
        <Drawer.Screen name="MyStack" component={ MyStack } />
        <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
        </Drawer.Navigator>
 );
}



const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {


    return (
        <DrawerContentScrollView>
            {/* Contenido del avatar */}
            <View style={ styles.avatarContainer }>
                <Image 
                    source={{ 
                        uri: 'https://francoabogados.com.co/wp-content/uploads/2021/05/Profile-pic.jpg'
                    }}
                    style= { styles.avatar }
                />
            </View>

            {/* Opciones de Menú */}
            <View style={ styles.menuContainer }>
                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate('MyStack') }
                >
                    <Text style={ styles.menuItem }>Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate('SettingsScreen') }
                >
                    <Text style={ styles.menuItem }>Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
    
}