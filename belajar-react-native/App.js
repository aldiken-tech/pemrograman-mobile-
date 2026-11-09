
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

const foods = [
  {
    id: '1',
    name: 'Nasi Goreng',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
  },
  {
    id: '2',
    name: 'Burger',
    price: 'Rp 25.000',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
  },
  {
    id: '3',
    name: 'Pizza',
    price: 'Rp 35.000',
    image: 'https://images.unsplash.com/photo- pizza?w=400',
  },
  {
    id: '4',
    name: 'French Fries',
    price: 'Rp 12.000',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
  },
];

export default function App() {
  return (
    <View style={styles.container}>  
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Food Catalog</Text>
        <Text style={styles.subtitle}>Temukan makanan favoritmu!</Text>
      </View>

      {/* Category */}
      <View style={styles.category}>
        <Text style={styles.sectionTitle}>Kategori Makanan</Text>

        <View style={styles.categoryList}>
          <Pressable style={styles.categoryItem}>
            <Text>All</Text>
          </Pressable>
          <Pressable style={styles.categoryItem}>
            <Text>Rice</Text>
          </Pressable>
          <Pressable style={styles.categoryItem}>
            <Text>Burger</Text>
          </Pressable>
          <Pressable style={styles.categoryItem}>
            <Text>Pizza</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    padding: 20,
    backgroundColor: '#FF6B35',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },

  subtitle: {
    color: 'white',
    marginTop: 5,
  },

  category: {
    padding: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  categoryList: {
    flexDirection: 'row',
    gap: 10,
  },

  categoryItem: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  foodSection: {
    padding: 15,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
  },

  foodImage: {
    width: '100%',
    height: 180,
  },

  cardContent: {
    padding: 15,
  },

  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  foodPrice: {
    color: '#FF6B35',
    fontSize: 16,
    marginVertical: 8,
  },

  buyButton: {
    backgroundColor: '#FF6B35',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
