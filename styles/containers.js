import { StyleSheet } from "react-native";

const containerBase = StyleSheet.create({
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
})

export default containers = StyleSheet.create({
    default: containerBase,
    center: {
        ...containerBase,
        justifyContent: 'center',
    },
})