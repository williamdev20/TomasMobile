import { StyleSheet, Text, View } from 'react-native';

export default function OrDivider() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Ou</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  line: {
    backgroundColor: "#fff",
    width: '25%',
    height: 1,
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    color: '#fff',
    padding: 10
  }
});
