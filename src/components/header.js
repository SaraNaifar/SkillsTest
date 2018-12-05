import React from 'react'
import {StyleSheet, Text, View} from 'react-native'



class Header extends React.Component{
	render(){
		const {viewStyle, textStyle} = styles
        const {headerText}= this.props
		return(
			<View style={viewStyle}>
			    <Text style={textStyle}>{headerText}</Text>
			</View>
		)
	}

}

export default Header




const styles = StyleSheet.create({
	viewStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F8F8F8',
		position:'relative',
		elevation:2,
		height: 60,
		paddingTop: 15
	},
	textStyle:{
		fontSize:20
	}

})