import styles from "../../styles/styles"
import BaseButton from "./BaseButton"

import { MaterialIcons } from '@expo/vector-icons'; 

const IconButton = ({ icon, onPress }) => {
    return (
        <BaseButton
            title={<MaterialIcons name={icon} size={24} color={styles.buttons.icon.text.color} />}
            onPress={onPress}
            buttonStyle={styles.buttons.icon}
        />
    )
}

export default IconButton
