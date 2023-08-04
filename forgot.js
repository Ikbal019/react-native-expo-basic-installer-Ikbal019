import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import tandaPanah from './assets/Vector.png'
import facebook from './assets/facebook.png'
import google from './assets/google.png'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View >
        <Text style={{
          fontSize: 34,
          fontWeight: 'bold'
        }}>Forgot Password</Text>
        <Text>
        Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
        <TextInput style={{
          height: 64,
          width: 320,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 10,
          paddingLeft: 10
        }} placeholder="Email" />

        <Button style={{
          marginTop: 40,
        }} title="Send" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingLeft: 20,
  },
});