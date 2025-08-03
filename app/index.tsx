import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/home/Header'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
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
