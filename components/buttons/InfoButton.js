import styles from "../../styles/styles"
import BaseButton from "./BaseButton"


const InfoButton = ({ title, onPress }) => {
    return (
        <BaseButton
            title={title}
            onPress={onPress}
            buttonStyle={styles.buttons.info}
        />
    )
}

export default InfoButton
