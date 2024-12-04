import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; 
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const serviceTypeOptions = {
  "Delivery Man": [
    { id: 1, name: "Fragile Items", icon: "cube-outline" },
    { id: 2, name: "Groceries", icon: "cart-outline" },
    { id: 3, name: "Documents", icon: "document-text-outline" },
  ],
  Truck: [
    { id: 1, name: "Scooter", icon: "moped-outline" },
    { id: 2, name: "Truck", icon: "truck-outline" },
    { id: 3, name: "Van", icon: "van-utility" },
  ],
  Airplane: [
    { id: 1, name: "International Shipping", icon: "airplane-outline" },
    { id: 2, name: "Express Cargo", icon: "speedometer-outline" },
  ],
  Boat: [
    { id: 1, name: "Overseas Freight", icon: "boat-outline" },
    { id: 2, name: "Bulk Liquids", icon: "water-outline" },
  ],
};

const PlaceOrderScreen = () => {  
  const { type, service } = useLocalSearchParams();
  const router = useRouter();
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);
  const flatListRef = useRef()
  const [details, setDetails] = useState("");
  
  useEffect(()=>{
    if (service) {
      setOptions(serviceTypeOptions[service]  || []);
    }
  },[service])

  const scrollToCenter = (index) =>{
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5
      })
    }
  }
  
  const renderTypeOptions =({item, index}) =>(
    <TouchableOpacity
      onPress={() =>{ 
        setSelectedOption(item.id)
        scrollToCenter(index)
      }}
      className='items-center justify-evenly p-2 '
    >
      <MaterialCommunityIcons
        name={item.icon}
        size={50}
        color={selectedOption === item.id ? "#34d399" : "#ffffff"}
        className={`mx-6 -bottom-5 rounded-full p-4 ${selectedOption === item.id ? "bg-white" : "bg-emerald-300"}`}
        
        
      />
      <Text className={`text-lg font-semibold text-white mt-5 `}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView className='flex-1 p-4 '>
      <ScrollView >
        <View className='bg-emerald-400 rounded-lg relative h-[180]'>
          <FlatList
            ref={flatListRef}
            data={options}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTypeOptions}
            extraData={selectedOption}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            getItemLayout={(data, index)=>({
              length: 100,
              offset: 100 * index,
              index
            })} 
            
          />
          <View style={styles.indicator}></View>
        </View>
        <View className='mt-5'>
          <Text className='text-xl text-gray-400 font-semibold'>Add location</Text>
          <View className='flex-row items-center justify-between mt-4 drop-shadow-sm shadow-gray-800 shadow-2xl bg-white rounded-xl border-gray-400 p-4'>
            <View className='flex-row items-center justify-center'>
              <View className='bg-red-500 rounded-full p-2'></View>
              <Text className='text-3xl text-gray-500 mx-3 font-semibold'>24, Ocean avenue</Text>
            </View>
            <Ionicons
              name='add'
              size={24}
              className='rounded-full bg-emerald-400 p-2'
              color={'#ffffff'}

            />
            
          </View>
          

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListContent:{
    alignItems:'center',
  },
  indicator: {
  marginTop: 0,
  position: 'absolute',
  bottom: 0, 
  left: '50%',
  marginLeft: -15, 
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderBottomWidth: 30, 
  borderBottomColor: '#ffffff', 
  borderLeftWidth: 15,
  borderLeftColor: 'transparent',
  borderRightWidth: 15,
  borderRightColor: 'transparent',
},

})

export default PlaceOrderScreen;
