import React from 'react'
import { ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetails from './albumDetails'

class AlbumList extends  React.Component{
	constructor(props){
	    super(props)
		this.state={
			albums:[]
		}
	}
	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({albums:response.data}))

	}

	renderAlbums(){
	    return this.state.albums.map( item=> <AlbumDetails key={item.title} album={item} /> )
	}
	render(){
		return(
			<ScrollView>
			    {this.renderAlbums()}
			</ScrollView>
		)
	}
}


export default AlbumList