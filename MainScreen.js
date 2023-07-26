import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView} from 'react-native'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import styles from './styles/styles';


const Stack = createStackNavigator();

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.containers.default}>
            <NavigationContainer

            >
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen component={LoginScreen} name="Login"></Stack.Screen>
                    <Stack.Screen component={SignUpScreen} name="SignUp"></Stack.Screen>
                    <Stack.Screen component={HomeScreen} name="Home"
                    options={{headerShown: false}}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}




export default MainScreen