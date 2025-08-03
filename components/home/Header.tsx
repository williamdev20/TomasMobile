import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.title}>COMECE SUA JORNADA</Text>
      <Text style={styles.text}>Descubra como a IA pode facilitar sua rotina com poucos cliques</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
    gap: 20
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#618CF0'
  },
  title: {
    height: 70,
    color: '#fff',
    textAlign: 'center',
    fontSize: 30
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    width: 230
  }
});
