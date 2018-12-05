import React from 'react'
import {View, StyleSheet} from 'react-native'


class CardSection extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.containerStyle}>
				{this.props.children}
			</View>
		)
	}
}

const styles =StyleSheet.create({
	containerStyle:{
		borderBottomWidth: 1,
		padding:5,
		backgroundColor: '#fff',
		shadowOffset: {widht:0, height:2},
		flexDirection:'row',
		justifyContent:'flex-start',
		position:'relative'
	}
})
export default CardSection