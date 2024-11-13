import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const index = () => {
  const [selectedType, setSelectedType] = React.useState('National');
  return (
    <SafeAreaView className='flex-1 p-3 mt-7'>
      <ScrollView>
        <View>
          {/*change to {user.name} */}
          <Text className='text-xl font-normal text-gray-700 '>Welcome, Jabin </Text>
        </View>
        <View className='flex-row items-center justify-between mt-1'>
          <View className='w-[50%] mb-4'>
            <Text className='classic-font text-4xl text-black text-wrap font-normal'>We are ready to serve</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/images/react-logo.png')}
              style={{ width: 100, height: 100 }}
              resizeMode='contain'
              className='rounded-full bg-white p-2'
            />
          </View>

        </View>

        <View className='flex-row items-center justify-around mt-4'>
          {['Department', 'National', 'International'].map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => setSelectedType(type)}
              className={`bg-gray-200 p-3 rounded-lg ${selectedType === type ? 'bg-emerald-300' : ''}`}
            >
              <Text className={`font-semibold ${selectedType === type ? 'text-white' : 'text-black'}`}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default index