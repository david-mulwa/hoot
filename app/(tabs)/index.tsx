import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const services = [
  {
    id: 0,
    image: require('../../assets/images/delivary.jpg'),
    name: 'Delivery Man',
  },
  {
    id: 1,
    image: require('@/assets/images/truck.jpg'),
    name: 'Truck',
  },
  {
    id: 2,
    image: require('@/assets/images/plane.jpg'),
    name: 'Airplane',
  },
  {
    id: 3,
    image: require('../../assets/images/boat.jpg'),
    name: 'Boat',
  },
];

const Index = () => {
  const [selectedType, setSelectedType] = useState<string>('National');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const router = useRouter();

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false); // Reset refreshing state after 2 seconds
    }, 1500);
  }, []);

  const handleServicePress = (item: { id: number; name: string }) => {
    setSelectedService(item.id);

    setTimeout(() => {
      setSelectedService(null);
      router.push({
        pathname: '/(screens)/PlaceOrderScreen',
        params: { type: selectedType, service: item.name },
      });
    }, 1000); // Simulate the delay to highlight the service before navigation
  };

  const renderService = ({ item }: { item: { id: number; name: string; image: any } }) => (
    <TouchableOpacity
      onPress={() => handleServicePress(item)}
      className={`flex-1 justify-between p-3 my-2 mx-3 rounded-lg ${
        selectedService === item.id ? 'bg-[#FF566A]' : 'bg-gray-200'
      }`}
    >
      <Text className={`text-2xl font-semibold ${selectedService === item.id ? 'text-white' : 'text-gray-700'}`}>
        {item.name}
      </Text>
      <View className="flex-row items-center mt-4">
        <Image
          source={item.image}
          style={{ width: 85, height: 85 }}
          resizeMode="contain"
          className="rounded-lg p-2"
        />
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color="#FFF"
          className={`mx-6 -bottom-5 rounded-full p-2 ${selectedService === item.id ? 'bg-white' : 'bg-[#FF566A]'}`}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 p-3 mt-7">
      <FlatList
        ListHeaderComponent={
          <>
            <View>
              <Text className="text-xl font-normal text-gray-700">Welcome, Jabin</Text>
            </View>

            <View className="flex-row items-center justify-between mt-1">
              <View className="w-[50%] mb-4">
                <Text className="classic-font text-4xl text-black text-wrap font-normal">
                  We are ready to serve
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/images/react-logo.png')}
                  style={{ width: 100, height: 100 }}
                  resizeMode="contain"
                  className="rounded-full bg-white p-2"
                />
              </View>
            </View>

            <View className="flex-row items-center justify-around mt-4">
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

            <View className="mt-7 bg-gray-200 p-5 rounded-xl">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="bg-emerald-300 p-3 rounded-full"></View>
                  <Text className="text-gray-700 mx-4 text-lg">Pick it up from</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-black font-semibold text-lg mx-16">London</Text>
                  <Ionicons name="chevron-forward" size={24} color="#6ee7b7" />
                </View>
              </View>

              <View className="border-l-2 border-dotted border-gray-800 h-8 ml-3"></View>

              <View className="flex-row items-center">
                <View className="flex-row items-center">
                  <View className="bg-[#FF566A] p-3 rounded-full"></View>
                  <Text className="text-gray-700 mx-5 text-lg">Delivery to</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-black font-semibold mx-24 text-lg">Texas</Text>
                  <Ionicons name="chevron-forward" size={24} color="#FF566A" />
                </View>
              </View>
            </View>

            <Text className="font-bold text-3xl text-black mt-5">Type of Service</Text>
          </>
        }
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderService}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );
};

export default Index;
