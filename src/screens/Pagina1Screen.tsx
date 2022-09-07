import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { Button, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { styles } from "../theme/appTheme"

interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1Screen</Text>

            <Button 
                title="Ir a página 2"
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />

            <Text style={ styles.title }>Navegando con props</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style= {{
                        ...styles.bigButton,
                        backgroundColor: 'purple'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        name: 'Daniel'
                    })}
                >
                    <Text style={ styles.btnText }>Daniel</Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                    style= {{
                        ...styles.bigButton,
                        backgroundColor: 'orange'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        name: 'Juan'
                    })}
                >
                    <Text style={ styles.btnText }>Juan</Text>
                </TouchableOpacity>
            </View>
       
        </View>
    )
}