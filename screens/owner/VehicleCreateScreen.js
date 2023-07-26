import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import styles from "../../styles/styles"
import VehicleCreateForm from "./VehicleCreateForm"


import VehicleSearchForm from "./VehicleSearchForm"

const VehicleCreateScreen = () => {

    const [result, setResult] = useState({})

    return (
        <ScrollView style={styles.containers.default}>
            <VehicleSearchForm
                setResult = {setResult}
            />
            <VehicleCreateForm result={result} setResult={setResult}/>
        </ScrollView>
    )
}

export default VehicleCreateScreen