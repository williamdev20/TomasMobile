import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Button({ title, background, textColor, href, onPress }) {
  const contentButton = (
    <TouchableOpacity style={[styles.button, {backgroundColor: background}]} onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  if (href) {
    return (
      <Link href={href} style={[styles.button, {backgroundColor: background}]} asChild>
        {contentButton}
      </Link>
    );
  }

  if (onPress) {
    return (
      contentButton
    );
  }

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
