import styles from "../../styles/styles"
import BaseButton from "./BaseButton"


const DefaultButton = ({ title, onPress }) => {
    return (
        <BaseButton
            title={title}
            onPress={onPress}
            buttonStyle={styles.buttons.default}
        />
    )
}

export default DefaultButton
