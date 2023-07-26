import { StyleSheet, View } from "react-native"
import styles from "../styles/styles"

const Divider = () => {
    return (
        <View
            style={{
                margin: 10,
                borderBottomColor: styles.colors.gray,
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
        />
    )
}

export default Divider