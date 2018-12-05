import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'


class Button extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
	    const {buttonStyle, textStyle}= style
		const {OnPress, name, children}= this.props
		return(
		    <TouchableOpacity style={buttonStyle} onPress={OnPress}>
				<Text style={textStyle}>
                    {children}
				</Text>
			</TouchableOpacity>
		)
	}
}

const style= StyleSheet.create({
	textStyle:{
		alignSelf:'center',
		fontWeight:'600',
		fontSize:12,
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle:{
		flex:1,
		alignSelf: 'stretch',
		borderRadius:5,
		borderWidth:1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
})

export default Button

