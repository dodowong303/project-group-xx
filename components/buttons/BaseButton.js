import { Pressable, Text } from "react-native"

const BaseButton = ({title, onPress, buttonStyle}) => {
    const callback = (onPress != undefined) ? onPress : (() => {})
    return (
        <Pressable
            onPress={callback}
            style={{
                ...buttonStyle,
            }}>
            <Text
                style={buttonStyle.text}>{title}</Text>
        </Pressable>
    )
}

export default BaseButton