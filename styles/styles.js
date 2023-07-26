import { StyleSheet } from "react-native";

import colors from "./colors";
import texts from "./texts";
import inputs from "./inputs";
import buttons from "./buttons";
import containers from "./containers"


const row = StyleSheet.create({
    button: {
        // ...container,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})

const styles = StyleSheet.create({
    colors,
    texts,
    buttons,
    inputs,
    containers,
    row
});

export default styles