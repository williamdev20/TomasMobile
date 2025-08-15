import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={require('../../assets/img/user.png')} style={styles.userImage}/>
      </View>
      <Text style={styles.title}>Criar uma conta</Text>
      <Text style={styles.text}>Insira seus dados para criar uma conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
    gap: 10
    
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#618CF0'
  },
  userImage: {
    width: 75,
    height: 75
  },
  title: {
    color: '#2463EB',
    textAlign: 'center',
    fontSize: 30,
    width: 220
  },
  text: {
    color: '#4B5563',
    textAlign: 'center',
    width: 250,
  }
});
