import { useState } from "react"
import { Text, TextInput, View } from "react-native"
import styles from "../styles/styles"

const TextField = ({label, text, onChangeText}) => {
    const [error, setError] = useState("")

    return (
        <View style={styles.inputs.container}>
            <Text style={styles.inputs.label}>{label}</Text>
            <TextInput
                style={styles.inputs.textInput}
                value={text}
                onChangeText={onChangeText}
                placeholder={`Enter ${label.toLowerCase()}`}
            />
            {error != "" && <Text style={styles.texts.error}>{error}</Text>}

        </View>
    )
}

export default TextField