import styles from "../../styles/styles"
import BaseButton from "./BaseButton"


const DangerButton = ({ title, onPress }) => {
    return (
        <BaseButton
            title={title}
            onPress={onPress}
            buttonStyle={styles.buttons.danger}
        />
    )
}

export default DangerButton
