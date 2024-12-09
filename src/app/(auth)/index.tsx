import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Button from '../../../Button'
import { useAuth, useUser } from '@clerk/clerk-expo'


const Home = () => {
  const { user } = useUser()
  const { signOut } = useAuth();


  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.imageUrl }} style={styles.image} />
      <Text style={styles.text}>Olá, {user?.fullName}!</Text>
      <Button icon="exit" title="Sair" onPress={() => signOut()}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 12
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    height: 92,
    width: 92,
    borderRadius: 46
  }
})


export default Home
