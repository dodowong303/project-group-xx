import { useState } from "react"
import { Text, View } from "react-native"
import DangerButton from "../components/buttons/DangerButton"
import DefaultButton from "../components/buttons/DefaultButton"
import InfoButton from "../components/buttons/InfoButton"
import TextField from "../components/TextField"
import styles from "../styles/styles"

const SignUpScreen = ({navigation, route}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    

    const onRandomButtonPress = () => {

    }

    const onResetButtonPress = () => {

    }

    const onSubmitButtonPress = () => {
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
            <TextField
                label="Password"
                text={password2}
                onChangeText={setPassword2}
            />
            <View style={styles.row.button}>
                <InfoButton title="Random" onPress={onRandomButtonPress} />
                <DangerButton title="Reset" onPress={onResetButtonPress} />
                <DefaultButton title="Submit" onPress={onSubmitButtonPress} />
                
            </View>

        </View>
    )
}

export default SignUpScreen