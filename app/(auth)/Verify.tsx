import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
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
    <ScrollView className="flex-1 items-center justify-center">
      <Text className="text-4xl font-bold text-black">Verify your account</Text>
      <Text className="text-center mt-2 mb-8 text-gray-600">We have sent a 4-digit code to your phone</Text>
      
      <View className="flex-row justify-between w-3/5">
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
            className={`w-12 h-12 border border-gray-400 text-center text-2xl rounded-lg mx-1 ${
              focusedIndex === index ? 'bg-green-400' : 'bg-white'
            }`}
          />
        ))}
      </View>
      
      <View className="mt-7 w-full px-5">
        <TouchableOpacity
          onPress={handleVerification}
          
        >
          <Text className="text-center text-white font-bold">Verify</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Verify;
