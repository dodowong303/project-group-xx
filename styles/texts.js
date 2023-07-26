import { StyleSheet } from "react-native";
import colors from "./colors";

export default texts = StyleSheet.create({
    label: {
        fontSize: 14,
    },
    normal: {
        fontSize: 20,
    },
    error: {
        color: colors.red,
        fontWeight: 'bold',
    }
})