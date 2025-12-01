import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const posters = [
  require('../../assets/images/movie1.jpg'),
  require('../../assets/images/movie2.png'),
  require('../../assets/images/movie3.jpg'),
];

export default function Home() {
  const router = useRouter();

  const movies = [
    { id: '1', title: 'Filme A' },
    { id: '2', title: 'Filme B' },
    { id: '3', title: 'Filme C' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bem-vindo ao Movie App</Text>

      <View style={styles.list}>
        {movies.map((m, i) => (
          <TouchableOpacity key={m.id} style={styles.card} onPress={() => { /* abrir detalhe */ }}>
            <Image source={posters[i % posters.length]} style={styles.poster} />
            <Text style={styles.title}>{m.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/(tabs)/login')}>
        <Text style={styles.loginTxt}>Sair (voltar ao Login)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 8,
  },
  poster: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 6,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  loginBtn: {
    marginTop: 18,
    backgroundColor: '#F08C8C',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginTxt: {
    color: '#222',
    fontWeight: '600',
  },
});
