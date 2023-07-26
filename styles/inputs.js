import { StyleSheet } from "react-native";
import colors from "./colors";
import texts from "./texts";

export default inputs = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        padding: 10,
    },
    label: texts.label,
    textInput: {
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,

        ...texts.normal,
        padding: 10,
    }
})