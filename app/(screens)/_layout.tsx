import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import "../../global.css"
import PlaceOrderScreen from "./PlaceOrderScreen";

const Stack = createNativeStackNavigator();

const AuthLayout = () => {
    const router = useRouter();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="PlaceOrderScreen"
                component={PlaceOrderScreen}
                options={{
                    headerTitle:"Place Order",
                    headerTitleAlign:"center",
                }}
            />      
            
            
            
        </Stack.Navigator>
    )
}
export default AuthLayout