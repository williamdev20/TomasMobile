import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>Cadastrar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingBottom: '20%'
	},
	button: {
		width: 250,
		backgroundColor: '#2463EB',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		borderRadius: 8,
	},
	text: {
		color: '#fff',
		fontSize: 20,
		width: 90
	}
});