import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { actorWithoutPhoto } from '../utils'
import { styles } from './styles'

export class Actor extends Component {
  constructor(props) {
    super(props)
    this.state = { imageSource: `https://image.tmdb.org/t/p/w185/${props.profile_path}` }
  }

  setDefaultImage = () => {
    this.setState({ imageSource: actorWithoutPhoto })
  }

  render() {
    const { name } = this.props
    const { imageSource } = this.state
    return (
      <View style={styles.actor}>
        <Image ref={this.imageRef} style={styles.image} source={{ uri: imageSource }} onError={this.setDefaultImage} />
        <Text style={styles.genre}>{name}</Text>
      </View>
    )
  }
}