import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Forget from "./Forget";
import Verify from "./Verify";

const Stack = createNativeStackNavigator();

const AuthLayout = () => {
    const router = useRouter();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Signup"
                component={Signup}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Forget"
                component={Forget}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Verify"
                component={Verify}
                options={{
                    headerShown: false,
                    headerTitle:'',
                }}
            />
        </Stack.Navigator>
    )
}
export default AuthLayout