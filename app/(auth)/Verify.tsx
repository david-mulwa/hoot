import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
import { useRouter } from 'expo-router';


const Verify = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputs = useRef<Array<TextInput | null>>([]);
  const router = useRouter();

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    
    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleVerification= async() =>{

    try{

      router.push("/(tabs)/")
    }catch(error){
      console.error('error')
    }

  }

  return (
    <SafeAreaView className='flex-1  items-center  p-3 justify-center'>

    
    
      <Text className="text-4xl font-bold text-black">Verify your account</Text>
      <Text className="text-center mt-3 mb-12 text-gray-600 text-lg ">We have sent a 4-digit code to your phone</Text>
      
      <View className="flex-row justify-between mt-8 mb-8">
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            keyboardType="number-pad"
            maxLength={1}
            style={{
              width: 75,
              height: 75,
            }}
            className={`drop-shadow-sm space-x-6 text-center text-2xl rounded-lg mx-4 ${
              focusedIndex === index ? 'bg-green-400' : 'bg-white'
            }`}
          />
        ))}
      </View>
      
      <View className="mt-12 w-full p-5 items-center justify-center bg-red-500 rounded-2xl ">
        <TouchableOpacity
          onPress={handleVerification}  
          className=''        
        >
          <Text className="text-center text-white font-bold text-2xl">Verify</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
};

export default Verify;
