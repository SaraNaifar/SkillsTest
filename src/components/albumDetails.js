import React from 'react'
import { View, Text, Image, StyleSheet, Linking} from 'react-native'
import Card from './card'
import CardSection from './cardSection'
import Button from './button'

class AlbumDetails extends React.Component{
	render(){
	    const {thumbnail_image, title, artist, image, url }= this.props.album
		const {thumbnailStyle,
			headerContentStyle,
			thumbnailContainerStyle,
			headerTextStyle,
			imageStyle}= styles
		return(
		    <Card>
				<CardSection>
					<View style={thumbnailContainerStyle}>
						<Image
							style={thumbnailStyle}
							source={{uri: thumbnail_image}}
						/>
					</View>
					<View style={headerContentStyle}>
			            <Text style={headerTextStyle}>{title}</Text>
						<Text>{artist}</Text>
					</View>
				</CardSection>
				<CardSection>
					<Image style={imageStyle} source={{uri:image}} />
				</CardSection>
				<CardSection>
					<Button OnPress={()=>Linking.openURL(url)} name={'Buy Album'} >
                        Buy Album
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const styles =StyleSheet.create({
	headerContentStyle:{
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle:{
	    fontSize:18
	},
	thumbnailStyle:{
		width: 50,
		height: 50
	},
	thumbnailContainerStyle:{
	    justifyContent: 'center',
		alignItems:'center',
		marginLeft: 10,
		marginRight:10

	},
	imageStyle:{
	    height: 300,
		flex:1,
		width:null
	}
})

export default AlbumDetails