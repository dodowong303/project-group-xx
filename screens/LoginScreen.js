import { useState } from "react"
import { Text, TextInput, View } from "react-native"
import DefaultButton from "../components/buttons/DefaultButton"
import InfoButton from "../components/buttons/InfoButton"
import TextField from "../components/TextField"
import styles from "../styles/styles"

const LoginScreen = ({navigation, route}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSignUpButtonPress = () => {
        navigation.navigate("SignUp")
    }

    const onLoginButtonPress = () => {
        navigation.navigate("Home")
        
    }
    return (
        <View style={styles.containers.center}>
            <TextField
                label="Email"
                text={email}
                onChangeText={setEmail}
            />
            <TextField
                label="Password"
                text={password}
                onChangeText={setPassword}
            />
            
            <View style={styles.row.button}>
                <InfoButton title="Sign Up" onPress={onSignUpButtonPress} />
                <DefaultButton title="Login" onPress={onLoginButtonPress} />
                
            </View>

        </View>
    )
}

export default LoginScreen