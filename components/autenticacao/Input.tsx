import { Text, StyleSheet, View, TextInput } from 'react-native';

export default function Input({ label, placeholder }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{ label }</Text>
			<TextInput placeholder={ placeholder } style={styles.input} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: '100%'
	},
	text: {
		marginRight: '40%',
		marginBottom: 10,
		color: '#4B5563',
		width: 150
	},
	input: {
		borderColor: "#797979",
		borderWidth: 1,
		borderRadius: 8,
		minWidth: '80%',
		paddingLeft: 10,
		marginBottom: 15
	}
});