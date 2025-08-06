import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Button({ title, background, textColor }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {backgroundColor: background}]}>
        <Text style={[styles.text, {color: textColor}]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 12,
  }
});
