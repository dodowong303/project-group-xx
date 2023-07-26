import styles from "../../styles/styles"
import BaseButton from "./BaseButton"


const SuccessButton = ({ title, onPress }) => {
    return (
        <BaseButton
            title={title}
            onPress={onPress}
            buttonStyle={styles.buttons.success}
        />
    )
}

export default SuccessButton
