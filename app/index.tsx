import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/home/Header';
import Button from '../components/home/Button';
import OrDivider from '../components/home/OrDivider';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.buttonContainer}>
        <Button
        title="Continuar com uma conta"
        background="#fff"
        textColor="#2A66F6"
        href="/cadastro"
        />
        <OrDivider />
        <Button 
        title="Continuar com o Google"
        background="#2A66F6"
        textColor="#fff"
        onPress={() => {
          alert("Você continuou com o Google");
        }}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A66F6',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
})
