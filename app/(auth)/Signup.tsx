import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image, Text, Alert, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Link, useRouter } from 'expo-router';
import 'react-native-get-random-values';



const Signup = () => {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [homeAddress, setHomeAddress] = useState('')
  const [homeAddress2, setHomeAddress2] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  //place your gogle api to the path
 const GOOGLE_MAPS= process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY

  // Request permission for both the media library and camera
  const requestPermissions = async () => {
    const { status: mediaStatus } = await ImagePicker.getMediaLibraryPermissionsAsync();
    const { status: cameraStatus } = await ImagePicker.getCameraPermissionsAsync();
    if (mediaStatus !== 'granted' || cameraStatus !== 'granted') {
      alert("Permission to access the media library and camera is required");
      return false;
    }
    return true;
  };

  // Handle action based on user choice
  const handleImageSelection = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    // Show options to take a photo or pick from gallery
    Alert.alert(
      "Upload Image",
      "Choose an option",
      [
        { text: "Take Photo", onPress: takePhoto },
        { text: "Choose from Gallery", onPress: pickImage },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  // Pick an image from the gallery
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image: ", error);
    }
  };

  // Take a photo with the camera
  const takePhoto = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error taking photo: ", error);
    }
  };

  {/* handle signup function */}
  const handleSignUp = async() =>{
    
    setTimeout(() => {
      router.push("/(auth)/Verify")
    }, 2000);
  } 

  return (
    <ScrollView className='flex-1 p-3 '>
      
        <KeyboardAvoidingView className='items-center justify-center mt-6'>
          <Text className='mb-6 mt-2 text-4xl font-bold '>Sign Up</Text>
          <View style={{ position: 'relative' }}>
          <TouchableOpacity
            onPress={handleImageSelection}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              borderWidth: 2,
              borderColor: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            ) : (
              <Ionicons name="person-outline" size={60} color="gray" />
            )}
          </TouchableOpacity>

          {/* Add button overlay */}
          <TouchableOpacity
            onPress={handleImageSelection}
            className='absolute bottom right-0 bg-[#FF566A] rounded-full p-2'
            
          >
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
          <Text className='font-bold text-2xl text-black mt-3 mb-3 '>Upload Picture</Text>

          <View className='w-full'>
              <View className=' border-gray-300 rounded-lg  bg-white px-3'>
                <Text className='text-gray-400 font-normal mt-1'>First Name</Text>
                <TextInput
                  placeholder=''                  
                  value={firstName}
                  onChangeText={setFirstName}
                  className='mt-1 mb-1 text-2xl font-semibold'
                />
              </View>
              <View className=' border-gray-300 rounded-lg  bg-white px-3  mt-3'>
                <Text className='text-gray-400 font-normal text-lg '>Last Name</Text>
                <TextInput
                  value={secondName}
                  onChangeText={setSecondName}
                  className='mt-1 text-2xl font-semibold'
                />
              </View>
              <View className=' border-gray-300 rounded-lg  bg-white px-3 mt-3'>
                <Text className='text-gray-400 font-normal text-lg '>Mobile Number</Text>
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  className='mt-1 text-2xl font-semibold'
                />
              </View>
              <View className=' border-gray-300 rounded-lg  bg-white px-3 mt-3'>
                <View className='flex-row items-center '>
                  <Text className='text-gray-400 font-normal text-lg '>City</Text>
                  <Ionicons name='chevron-down' size={24} color={'gray'}/>
                </View>
                <GooglePlacesAutocomplete
                  placeholder=''
                  fetchDetails= {true}
                  onPress={(data, details=null)=>{
                    setCity(data.description)
                  }}
                  query={{
                    key: GOOGLE_MAPS,
                    language: 'en',
                    type:"(cities)"
                  }}
                  styles={{
                    textInput:{
                      borderColor: 'gray',                      
                    }
                  }}
                />          
              </View>
              <View className=' border-gray-300 rounded-lg  bg-white px-3  mt-3'>
                
                  <Text className='text-gray-400 font-normal text-lg '>Home Address</Text>
                                  
                <GooglePlacesAutocomplete
                  placeholder=''
                  fetchDetails= {true}
                  onPress={(data, details=null)=>{
                    setHomeAddress(data.description)
                  }}
                  query={{
                    key: GOOGLE_MAPS,
                    language: 'en',
                    
                  }}
                  styles={{
                    textInput:{                      
                      borderColor: 'gray',                      
                    }
                  }}
                />          
              </View>
              <View className=' border-gray-300 rounded-lg  bg-white px-3  mt-3'>
                
                  <Text className='text-gray-400 font-normal text-lg '>Home Address 2</Text>
                                  
                <GooglePlacesAutocomplete
                  placeholder=''
                  fetchDetails= {true}
                  onPress={(data, details=null)=>{
                    setHomeAddress2(data.description)
                  }}
                  query={{
                    key: GOOGLE_MAPS,
                    language: 'en',
                    
                  }}
                  styles={{
                    textInput:{                      
                      borderColor: 'gray',                      
                    }
                  }}
                />          
              </View>

              <View className=' border-gray-300 rounded-lg  bg-white px-3  mt-3'>
                <Text className='text-gray-400 font-normal text-lg '>Password</Text>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  className='mt-1 text-2xl font-semibold'
                />
              </View>
          </View>

          <View>
            <Text className='text-lg text-balance text-gray-700'>
              By continuing, I confirm that I have read and agree to the {}  
              <Link
                className='text-[#FF566A] space-x-3'
               href={"https://reactnative.dev/docs/linking"}>
               Terms and Condtions 
              </Link> 
                 {} and  {}  
              <Link
              className='text-[#FF566A] space-x-3' 
              href={'https://reactnative.dev/docs/linking'}>
              Privacy Policy
              </Link>
            </Text>
          </View>

          <View className='w-full bg-[#FF566A] rounded-xl p-5 mt-7 items-center justify-center'>
            <TouchableOpacity onPress={handleSignUp}>
              <Text className='text-white font-bold text-2xl '>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row items-center justify-center space-x-3 mb-6'>
            <Text className='text-lg font-normal text-black'>Already have an account? </Text>
            <TouchableOpacity
              onPress={()=>router.push('/(auth)/Login')}
            >
              <Ionicons name='arrow-forward' size={24} color={"#FF566A"}/>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      
    </ScrollView>
  );
};

export default Signup;
