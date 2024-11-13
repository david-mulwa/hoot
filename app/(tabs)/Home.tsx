import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Home = () => {
  const Router = useRouter() 
  return (
    <View className='flex-1 items-center justify-center '>
      <TouchableOpacity
        onPress={() => {Router.push('/(auth)/Login') }}
      >
        <Text>log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {Router.push('/(auth)/Welcome') }}
      >
        <Text>Welcome</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {Router.push('/(auth)/Signup') }}
      >
        <Text>sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {Router.push('/(auth)/Verify') }}
      >
        <Text>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {Router.push('/(auth)/Forget') }}
      >
        <Text>Forget</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home