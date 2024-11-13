import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter()
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')


    const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);
    const handleLogin = () => {
        {/*login logic*/}
        router.push('/(tabs)/')
    }

    const handleLoginWithFaceBook = () => {
        {/*login  facebook logic*/}
        router.push('/(tabs)/')
    }

    const handleLoginWithGoogle = () => {
        {/*login  google logic*/}
        router.push('/(tabs)/')
    }

  return (
    <ScrollView className='p-3'>
        <View className='mt-9  flex-row items-center justify-between w-full'>
                <View >
                   <TouchableOpacity
                    onPress={()=>router.push('/(auth)/Signup')}
                    className='bg-white rounded-full p-2 '
                   >  
                      <Ionicons name='chevron-back' color='black' size={24}/>
                   </TouchableOpacity>
                </View>
                <View>
                    <Text className='text-center text-4xl font-bold '>Login</Text>
                </View>
                <View>
                    {}
                </View>
        </View>
        <KeyboardAvoidingView className=' w-full  flex-1 items-center justify-center'>
            
            
            {/*logo*/}
            <View className='mt-6'>
                <Image
                    source={require('../../assets/images/react-logo.png')}
                    className='w-40 h-40'
                />
            </View>

            <Text className='text-4xl font-bold text-black'>Welcome Back!</Text>

            <View className='w-full'>
                <View className='w-full flex-row justify-between items-center my-2 border border-gray-300 rounded-md px-4 bg-white p-2'>
                    <View>
                        <Text className='text-gray-400 font-normal text-lg'>Mobile Number</Text>
                        <TextInput
                            className='mt-1 text-2xl font-semibold'
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType='number-pad'
                        />
                    </View>
                    {validatePhoneNumber(phone) ? (
                            <Ionicons name="checkmark" size={24} color="green" className='mr-2 ' />
                        ) : null}
                </View>

                <View className='w-full p-2 my-2 border border-gray-300 rounded-md px-4 bg-white mt-2 shadow-white ' >
                    <Text className='text-gray-400 font-normal text-lg'>Password</Text>
                    <TextInput
                        className='mt-1 text-2xl font-semibold'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {router.push('/(auth)/Forget')}}
                    className='flex-row space-x-3 items-center mt-2 justify-end '
                >
                    <Text className='text-black font-semibold text-xl'>Forget your password? </Text>
                    <Ionicons name="arrow-forward" size={24} color="green" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={()=>{handleLogin}}
                className=' p-5 bg-red-500 mt-12 items-center justify-center  rounded-xl w-full  '
            >
                <Text className='text-white text-2xl font-bold'>LOGIN</Text>
            </TouchableOpacity>

            {/*social login*/}
            <Text className='text-2xl font-bold mt-6 '>or login with social account</Text>


            <View className=' flex-row items-center space-x-4 mt-7 justify-between '>
                <View className='bg-white shadow-blur-sm shadow-white p-3 rounded-xl mx-6 '>
                   <TouchableOpacity
                onPress={()=>{handleLoginWithFaceBook}}
                className=' p-3 rounded-xl'
                >
                    <Ionicons name="logo-facebook" size={50} color="blue" />
                </TouchableOpacity>
                </View>

                <View className='bg-white shadow-blur-sm shadow-white p-3 rounded-xl mx-6 '>
                <TouchableOpacity
                    onPress={()=>{handleLoginWithGoogle}}
                    className=' p-3 rounded-xl'
                >
                    <Ionicons name="logo-google" size={50} color="blue" />
                </TouchableOpacity>
                </View>
            </View>

            {/*signup*/}
            <View className='mt-9 flex-row items-center justify-center '>
                <View>
                   <Text className='text-lg font-bold mt-1 '>Don't have an account?</Text>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={()=>{router.push('/(auth)/Signup')}}
                    className='flex-row space-x-3 items-end mt-2 justify-center '
                >
                    
                    <Ionicons name="arrow-forward" size={24} className='tetx-red-500' />
                  </TouchableOpacity>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Login