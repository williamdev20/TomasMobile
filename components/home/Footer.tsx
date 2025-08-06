import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <Text style={styles.text}>© 2025 Tomas. Todos os direitos reservados.</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    width: 250,
    paddingBottom: 100,
    textAlign: 'center',
    fontSize: 10
  }
});
