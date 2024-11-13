import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 items-center justify-center relative bg-blue-700'>
        
        <ImageBackground
          source={{uri: 'https://lirp.cdn-website.com/9f7de6b3/dms3rep/multi/opt/CLM-Cargo-Portada-Cristina-logo-1-1024x873-309w.png'}} 
          style={{ width: '100%', height: '100%' }}
          resizeMode='cover'
          className='absolute top-0 left-0 right-0 bottom-0 opacity-20'
        />

        {/*overlay*/}        
        <View className='absolute inset-0 bg-blue-500 opacity-30' />

        {/* Logo */}
        <View className='flex-1 items-center justify-center'>
          <Image
            source={require('../../assets/images/react-logo.png')} // Replace with your logo image
            style={{ width: 150, height: 150 }}
            resizeMode='contain'
          />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => router.push('/(auth)/Login')}
          className='absolute bottom-10 w-3/4 p-3 bg-red-500 rounded-full items-center'
        >
          <Text className='text-white text-2xl'>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Welcome;
