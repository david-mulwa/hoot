import { View, Text, SafeAreaView, ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import {  useRouter } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Welcome = () => {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 flex-col items-center justify-center relative'>
        <View className='w-full h-full absolute inset-0 bg-[#ffa500] bg-opacity-75'></View>
        <ImageBackground
          source={require('../../assets/images/react-logo.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode='cover'
          className='flex-1 justify-center items-center'  
          
        >
          <TouchableOpacity
            onPress={()=> router.push('/(auth)/Login')}
            className=' p-3 bg-red-500 bottom-4 absolute rounded-full w-3/4  '
          >
            <Text className='text-white text-2xl'>Get Started</Text>
          </TouchableOpacity>
          
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Welcome