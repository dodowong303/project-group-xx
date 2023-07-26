import { useState } from "react"
import { Text, View } from "react-native"
import styles from "../styles/styles"

import DropDownPicker from 'react-native-dropdown-picker';

const Picker = ({label, open, setOpen, value, setValue, items, setItems}) => {

    // const [open, setOpen] = useState(false);
    const [error, setError] = useState("")

    return (
        <View style={{
            ...styles.inputs.container,
            zIndex: (open) ? 10 : 0,
        }}>
            <Text style={styles.inputs.label}>{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items.map((item) => {return {"label": item, "value": item}})}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.inputs.textInput}
            />
            {error != "" && <Text style={styles.texts.error}>{error}</Text>}

        </View>
    )
}

export default Picker