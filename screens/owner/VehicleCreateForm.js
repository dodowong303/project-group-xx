import { useState } from "react"
import { Text, View } from "react-native"
import DefaultButton from "../../components/buttons/DefaultButton"
import TextField from "../../components/TextField"
import { createVehicle } from "../../services/vehicleAPI"
import styles from "../../styles/styles"

const VehicleCreateForm = ({ result, setResult }) => {

    const updateResult = (value, field) => {
        const newForm = {...result}//JSON.parse(JSON.stringify(result))
        newForm[field] = value
        setResult(newForm)
    }

    const onCreateButtonPress = () => {
        const {
            make,
            model,
            trim,
            name,
            capacity,
            model_year,
            form_factor,
        } = result
        images = result?.images?.map(item => item.url_full).filter(item => item)
        createVehicle({make, model, trim, name, capacity, model_year, form_factor, images})
        .then((result) => {
            console.log("SDSS", result)
        })

    }
    return (
        <View style={styles.containers.default}>
            <TextField
                label="Make"
                text={result.make}
                onChangeText={(value) => {updateResult(value, "make")}}
            />
            <TextField
                label="Model"
                text={result.model}
                onChangeText={(value) => {updateResult(value, "model")}}
            />
            <TextField
                label="Trim"
                text={result.trim}
                onChangeText={(value) => {updateResult(value, "trim")}}
            />
            <TextField
                label="Name"
                text={result.name}
                onChangeText={(value) => {updateResult(value, "name")}}
            />
            <TextField
                label="Capacity"
                text={result.capacity || ""}
                onChangeText={(value) => {updateResult(value, "capacity")}}
            />
            <TextField
                label="Model Year"
                text={result["model_year"]}
                onChangeText={(value) => {updateResult(value, "model_year")}}
            />
            <TextField
                label="Form Factor"
                text={result["form_factor"]}
                onChangeText={(value) => {updateResult(value, "form_factor")}}
            />

            <View style={styles.row.button}>
                <DefaultButton
                    title="Create"
                    onPress={onCreateButtonPress}
                    />
            </View>
        </View>
    )
}

export default VehicleCreateForm