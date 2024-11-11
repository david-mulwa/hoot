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
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center p-3">
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <KeyboardAvoidingView behavior="padding" className="w-full">
          <View className="mt-12 items-center">
            <Image
              source={require('../../assets/images/react-logo.png')}
              style={{ width: 160, height: 160, resizeMode: 'contain' }}
            />
          </View>

          <View className="mt-6 px-4 text-center">
            <Text className="text-4xl text-black font-bold">Forgot Password</Text>
            <Text className="mt-2 font-normal text-lg text-gray-600 leading-6 text-center">
              Please, enter your email address. You will receive a link to create a new password via email.
            </Text>
          </View>

          <View className="mt-7 w-full px-4">
            <Text className="text-gray-700 font-medium mb-2">Email Address</Text>
            <View
              className={`w-full h-12 px-4 border ${isValidEmail ? 'border-gray-300' : 'border-red-500'} rounded-md bg-white flex-row items-center`}
            >
              <TextInput
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                placeholder="Enter your email"
                className="flex-1 text-lg text-gray-800"
              />
              {email ? (
                <TouchableOpacity onPress={() => setEmail('')}>
                  <Ionicons name="close-circle" size={24} color="gray" />
                </TouchableOpacity>
              ) : null}
            </View>
            {!isValidEmail && (
              <Text className="text-red-500 text-sm mt-1">Please enter a valid email address</Text>
            )}
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="mt-6 w-full p-5 bg-red-500 rounded-md items-center justify-center"
          >
            <Text className="text-white text-lg font-bold">SEND</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>

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
