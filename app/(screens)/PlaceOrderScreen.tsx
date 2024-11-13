import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; 

const PlaceOrderScreen = () => {
  // Retrieve query parameters using useSearchParams hook
  const { type, service } = useLocalSearchParams();
  const router = useRouter();

  // Handle order confirmation or navigation
  const handleConfirmOrder = () => {
    // Here you can add the logic to confirm the order, e.g., API call, etc.
    console.log(`Order Confirmed for ${service} - Type: ${type}`);
    router.push('/(tabs)/'); // Redirecting to the main tab (or wherever you want)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Order Details</Text>
        <View style={styles.details}>
          <Text style={styles.detailText}>Service: {service}</Text>
          <Text style={styles.detailText}>Type: {type}</Text>
        </View>
        <TouchableOpacity onPress={handleConfirmOrder} style={styles.confirmButton}>
          <Text style={styles.buttonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  details: {
    marginBottom: 30,
  },
  detailText: {
    fontSize: 18,
    color: '#555',
  },
  confirmButton: {
    backgroundColor: '#FF566A',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PlaceOrderScreen;
