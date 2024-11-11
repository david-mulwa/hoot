import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {
  const Router = useRouter()
  return (
    <View className='flex-1 items-center justify-center '>
      <Text>index</Text>
      <TouchableOpacity
        onPress={() => {Router.push('/(auth)/Welcome') }}
      >
        <Text>Welcome</Text>
      </TouchableOpacity>

    </View>
  )
}

export default index