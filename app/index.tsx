import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/home/Header';
import Button from '../components/home/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Button
      title="Continuar com uma conta"
      background="#fff"
      textColor="#2A66F6"
      />
      <Button 
      title="Continuar com o Google"
      background="#2A66F6"
      textColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A66F6'
  },
  text: {
    color: '#fff',
    paddingHorizontal: 12
  }
})
