import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import DefaultButton from "../../components/buttons/DefaultButton"
import Divider from "../../components/Divider"
import { loadVehicleData } from "../../services/vehicleAPI"
import styles from "../../styles/styles"
import Picker from "../../components/Picker"

const VehicleSearchForm = ({setResult}) => {
    const [map, setMap] = useState({})

    const [vehicles, setVehicles] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    
    useEffect(() => {
        console.log("Loading data from API")
        const setSearchFields = (map, vehicle) => {
            const {make, model, trim} = vehicle
            setMakeOption(make)
            setModelOption(model)
            setTrimOption(trim)
            
            
            setMakeOptions(Object.keys(map))
            setModelOptions(Object.keys(map[make]))
            setTrimOptions(Object.keys(map[make][model]))
            
        }
        
        const groupVehcilesBySearchFields = (vehicles) => {
            const map = {}
            vehicles.forEach((vehicle) => {
                const make = vehicle.make
                const model = vehicle.model
                const trim = vehicle.trim
    
                let current = map
                for (key of [make, model, trim]) {
                    if (!current.hasOwnProperty(key)) {
                        current[key] = {}
                    }
                    current = current[key]
                }
                map[make][model][trim] = vehicle
            })
            setMap(map)
            return map
        }

        if (isDataLoaded) return
        loadVehicleData()
            .then((vehicles) => {
                setIsDataLoaded(true)
                setVehicles(vehicles)
                const map = groupVehcilesBySearchFields(vehicles)
                if (vehicles.length > 0) {
                    setSearchFields(map, vehicles[0])
                }
            })
            .catch((error) => {
                setIsDataLoaded(true)
                setVehicles([])
                console.log(error)
                throw undefined
            })
    }, [isDataLoaded, vehicles])

    const [makeOpen, setMakeOpen] = useState(false)
    const [makeOption, setMakeOption] = useState("")
    const [makeOptions, setMakeOptions] = useState([])

    const [modelOpen, setModelOpen] = useState(false)
    const [modelOption, setModelOption] = useState("")
    const [modelOptions, setModelOptions] = useState([])

    const [trimOpen, setTrimOpen] = useState(false)
    const [trimOption, setTrimOption] = useState("")
    const [trimOptions, setTrimOptions] = useState([])

    const updatePicker = (items, setItemFunction, setItemsFunction) => {
        setItemsFunction((items != undefined) ? items : [])
        setItemFunction((items.length > 0) ? items[0] : "")
    }

    const updateTrimOptions = (model) => {
        const options = Object.keys(map[makeOption][model])
        updatePicker(options, setTrimOption, setTrimOptions)
    }

    const updateModelOptions = (make) => {
        const makes = map[make]
        const modelOptions = Object.keys(makes)
        const trimOptions = (modelOptions.length > 0) ? Object.keys(makes[modelOptions[0]]) : []

        updatePicker(modelOptions, setModelOption, setModelOptions)
        updatePicker(trimOptions, setTrimOption, setTrimOptions)
    }

    const onSearchButtonPress = () => {
        console.log("SEARCH", makeOption, modelOption, trimOption)
        let result = map
        for (key of [makeOption, modelOption, trimOption]) {
            // console.log(map, key)
            result = result[key]
            if (result == undefined) break
        }
        if (result == undefined) {
            setResult({})
        }
        result.capacity = "0"
        result.name = ((result.make || "") + " " + (result.model || "") + " " + (result.trim || "")).trim()
        setResult(result)
    }

    const openPicker = (value, func) => {
        for (openFunction of [setMakeOpen, setModelOpen, setTrimOpen]) {
            openFunction((openFunction == func) ? value : false)
        }
    }
    return (
        <View style={{zIndex: 5,}}>
            {!isDataLoaded && <Text>Loading</Text>}
            {isDataLoaded && (
                <>
            <Text>Search Vehicle</Text>
            
            <Picker
                label="Make"
                open={makeOpen}
                setOpen={(value) => {
                    openPicker(value, setMakeOpen)
                }}
                value={makeOption}
                setValue={(value) => {
                    updateModelOptions(value())
                    setMakeOption(value())
                }}
                items={makeOptions}
                setItems={setMakeOptions}
            />
            <Picker
                label="Model"
                open={modelOpen}
                setOpen={(value) => {
                    openPicker(value, setModelOpen)
                }}
                value={modelOption}
                setValue={(value) => {
                    updateTrimOptions(value())
                    setModelOption(value())
                }}
                items={modelOptions}
                setItems={setModelOptions}
            />
            <Picker
                label="Trim"
                open={trimOpen}
                setOpen={(value) => {
                    openPicker(value, setTrimOpen)
                }}
                value={trimOption}
                setValue={setTrimOption}
                items={trimOptions}
                setItems={setTrimOptions}
            />
            <View style={styles.row.button}>
                <DefaultButton title="Search" onPress={onSearchButtonPress} />
            </View>
            <Divider />
            </>)}
        </View>
    )
}

export default VehicleSearchForm