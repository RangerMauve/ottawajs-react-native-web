import React from 'react'
import {
	StyleSheet, Text, View
} from 'react-native'

const styles = StyleSheet.create({
	app: {
		padding: 64,
		backgroundColor: "#420666",
		alignItems: "center",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 32,
	}
});


export default function App(){
	return (
		<View style={styles.app}>
			<Text style={styles.text}>Hello World!</Text>
		</View>
	);
}
