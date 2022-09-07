import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react"
import { Button, Text, View } from "react-native"
import { styles } from "../theme/appTheme";

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola mundo',
            headerBackTitle: ''
        })
    })

    return (
        
        <View style={ styles.globalMargin }>
            <Text style={ styles.title } >PAGINA 2</Text>

            <Button 
                title="Ir a Página 3"
                onPress={ () => navigator.navigate('Pagina3Screen') }
            />

        </View>
        
    )
}