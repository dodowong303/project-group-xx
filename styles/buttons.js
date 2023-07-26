import { StyleSheet } from "react-native";
import colors from "./colors";
import texts from "./texts";

const buttonBase = StyleSheet.create({
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    minWidth: 100,
    alignSelf: 'flex-start',
})

export default buttons = StyleSheet.create({
    default: {
        ...buttonBase,
        backgroundColor: colors.blue,
        text: {
            ...texts.normal,
            color: colors.white,
            textAlign: 'center',
        }
    },
    icon: {
        ...buttonBase,
        minWidth: 50,
        backgroundColor: colors.white,
        text: {
            ...texts.normal,
            color: colors.blue,
            textAlign: 'center',
        }
    },
    info: {
        ...buttonBase,
        backgroundColor: colors.teal,
        text: {
            ...texts.normal,
            color: colors.white,
            textAlign: 'center',
        }
    },
    success: {
        ...buttonBase,
        backgroundColor: colors.green,
        text: {
            ...texts.normal,
            color: colors.white,
            textAlign: 'center',
        }
    },
    danger: {
        ...buttonBase,
        backgroundColor: colors.red,
        text: {
            ...texts.normal,
            color: colors.white,
            textAlign: 'center',
        }
    }
})


