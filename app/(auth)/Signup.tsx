import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image, Text, Alert, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Link, useRouter } from 'expo-router';


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
    <SafeAreaView className='flex-1 items-center p-3 justify-center'>
      <ScrollView>
        <KeyboardAvoidingView>
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
            <View
              style={{
                position: 'absolute',
                bottom: -5,
                right: -5,
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 2,
              }}
            >
              <Ionicons name="add-circle" size={24} color="red" />
            </View>

          </TouchableOpacity>
          <Text className='font-bold text-lg text-black mt-5 '>Upload Picture</Text>

          <View className='w-full'>
              <View className='w-full flex-row justify-between items-center my-2 border border-gray-300 rounded-md px-4 bg-white p-2'>
                <Text className='text-gray-400 font-normal text-lg '>First Name</Text>
                <TextInput
                  value={firstName}
                  onChangeText={setFirstName}
                  className='mt-1 text-2xl font-semibold'
                />
              </View>
              <View className='w-full flex-row justify-between items-center my-2 border border-gray-300 rounded-md px-4 bg-white p-2'>
                <Text className='text-gray-400 font-normal text-lg '>Last Name</Text>
                <TextInput
                  value={secondName}
                  onChangeText={setSecondName}
                  className='mt-1 text-2xl font-semibold'
                />
              </View>
              <View className='w-full flex-row justify-between items-center my-2 border border-gray-300 rounded-md px-4 bg-white p-2'>
                <Text className='text-gray-400 font-normal text-lg '>Mobile Number</Text>
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  className='mt-1 text-2xl font-semibold'
                />
              </View>
              <View className='w-full flex-row justify-between items-center my-2 border border-gray-300 rounded-md px-4 bg-white p-2'>
                <View className='flex-row justify-center'>
                  <Text className='text-gray-400 font-normal text-lg '>City</Text>
                  <Ionicons name='arrow-down' size={24} color={'gray'}/>
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
                      borderBottomWidth: 1,
                      borderColor: 'gray',
                      marginBottom:10,
                    }
                  }}
                />          
              </View>
              <View className='w-full flex-row justify-between items-center my-2 border border-gray-300 rounded-md px-4 bg-white p-2'>
                
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
                      borderBottomWidth: 1,
                      borderColor: 'gray',
                      marginBottom:10,
                    }
                  }}
                />          
              </View>
              <View className='w-full flex-row justify-between items-center my-2 border border-gray-300 rounded-md px-4 bg-white p-2'>
                
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
                      borderBottomWidth: 1,
                      borderColor: 'gray',
                      marginBottom:10,
                    }
                  }}
                />          
              </View>

              <View className='w-full flex-row justify-between items-center my-2 border border-gray-300 rounded-md px-4 bg-white p-2'>
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
              By continuining, I confirm that I have read and agree to the 
              <Link
                className='text-red-500'
               href={"file:///C:/Users/mulwa/Downloads/Delivery%20Logistics%20App%20(Community)%20(1).pdf"}>
              Terms and Condtions
              </Link> 
              and 
              <Link
              className='text-red-500' 
              href={"file:///C:/Users/mulwa/Downloads/Delivery%20Logistics%20App%20(Community)%20(1).pdf"}>
              Privacy Policy
              </Link>
            </Text>
          </View>

          <View className='w-full bg-red-500 rounded-xl p-5 mt-7 items-center justify-center'>
            <TouchableOpacity onPress={handleSignUp}>
              <Text className='text-white font-bold text-2xl '>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row items-center justify-center space-x-3'>
            <Text className='text-lg font-normal text-black'>Already have an account? </Text>
            <TouchableOpacity
              onPress={()=>router.push('/(auth)/Login')}
            >
              <Ionicons name='arrow-forward' size={24} color={"red"}/>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
