import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Text, View } from "react-native"
import styles from "../styles/styles"
import VehicleCreateScreen from './owner/VehicleCreateScreen';
import BookingManagementScreen from './owner/BookingManagementScreen';
import VehicleSearchScreen from './renter/VehicleSearchScreen';
import ReservationListScreen from './renter/ReservationListScreen';
import IconButton from '../components/buttons/IconButton';

const Tab = createBottomTabNavigator()

const HomeScreen = ({ navigation, route }) => {
    const onLogoutButtonPress = () => {
        console.log("Logout")
        navigation.navigate("Login")
    }

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
            const map = {
                'Create': (<MaterialIcons name="create" size={size} color={(focused) ? styles.colors.blue : styles.colors.gray} />),
                'Bookings': (<MaterialIcons name="approval" size={size} color={(focused) ? styles.colors.blue : styles.colors.gray} />),
                'Search': (<FontAwesome name="search" size={size} color={(focused) ? styles.colors.blue : styles.colors.gray} />),
                'Reserves': (<AntDesign name="car" size={size} color={(focused) ? styles.colors.blue : styles.colors.gray} />),
            }

            return  map[route.name]
        },
        headerShown: false,
    })
    
    return (
        <View style={styles.containers.default}>
            {/* <NavigationContainer
                independent={true}
            > */}
            <View style={styles.row.button}>
                <IconButton
                    icon="logout"
                    onPress={onLogoutButtonPress} />
            </View>
            <Tab.Navigator screenOptions={screenOptions}>

                <Tab.Screen name="Create" component={VehicleCreateScreen} />
                <Tab.Screen name="Bookings" component={BookingManagementScreen} />
                <Tab.Screen name="Search" component={VehicleSearchScreen} />
                <Tab.Screen name="Reserves" component={ReservationListScreen} />
            </Tab.Navigator>
            {/* </NavigationContainer> */}
        </View>
    )
}

export default HomeScreen