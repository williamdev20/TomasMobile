import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Button({ title, background, textColor }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: background}]}>
      <Text style={[styles.text, {color: textColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 40,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 70
  },
  text: {
    textAlign: 'center',
    width: 200
  }
});
