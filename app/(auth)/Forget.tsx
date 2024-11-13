import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Snackbar } from 'react-native-paper';

const Forget = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValidEmail(validateEmail(text));
  };

  const handleSubmit = () => {
    if (isValidEmail && email) {
      setSnackbarVisible(true);  
      router.push('/(auth)/Login');
    }
    router.replace('/(auth)/Login')
  };

  return (
    
      <SafeAreaView className='flex-1 flex-col  p-3 '
        >
          <View className=' flex-row items-center justify-between mt-12 '>
                <View >
                   <TouchableOpacity
                    onPress={()=>router.push('/(auth)/Login')}
                    className='bg-white rounded-full p-2 '
                   >  
                      <Ionicons name='chevron-back' color='black' size={24}/>
                   </TouchableOpacity>
                </View>
                <View>
                    <Text className='text-center text-4xl font-bold '>Forgot Password</Text>
                </View>
                <View>
                    {}
                </View>
        </View>
        <KeyboardAvoidingView className='items-center justify-center '>
          <View className='mb-6 mt-12'>
            <Image
              source={require('../../assets/images/react-logo.png')}
              style={{ width: 160, height: 160, resizeMode: 'contain' }}
            />
          </View>

          <View className='items-center justify-center flex-col mt-4 ' >
            <Text className="text-4xl text-black font-bold mt-4 ">Forgot Password</Text>
            <Text className="mt-4 p-5 font-normal text-xl text-gray-700 leading-6 text-center">
              Please, enter your email address. You will receive a link to create a new password via email.
            </Text>
          </View>

          <View className={`mt-4 border p-3 rounded-2xl  ${isValidEmail ? 'border-gray-300' : 'border-[#FF566A]'}`}>
            <Text className="text-gray-400 font-medium mb-2">Email Address</Text>
            <View
              className={`w-full  px-4   rounded-md  flex-row items-center`}
            >
              <TextInput
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                placeholder=""
                className="flex-1 text-lg font-bold text-gray-800"
              />
              {email ? (
                <TouchableOpacity onPress={() => setEmail('')}>
                  <Ionicons name="close-circle" size={24} color="gray" />
                </TouchableOpacity>
              ) : null}
            </View>
            
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={()=>handleSubmit}
            className="mt-6 w-full p-5 bg-[#FF566A] rounded-md items-center justify-center"
          >
            <Text className="text-white text-lg font-bold">SEND</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      

      {/* Snackbar */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={4000}
      >
        Check your email for a password reset link.
      </Snackbar>
      </SafeAreaView>
    
  );
};

export default Forget;
