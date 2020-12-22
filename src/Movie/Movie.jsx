import React, { Component } from 'react'
import { Text, Button, View, Image, ImageBackground, ScrollView } from 'react-native'
import { API_KEY, numberWithCommas } from '../utils'
import { styles } from './styles'
import { Actor } from '../Actor'
import Icon from 'react-native-vector-icons/FontAwesome'

export class Movie extends Component {
  state = { movie: null, credits: null }

  componentDidMount() {
    this.getMovie()
  }

  getMovie = async () => {
    const { id } = this.props.route.params
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    const movie = await movieResponse.json()
    const credits = await creditsResponse.json()
    movie.cast = credits.cast
    this.setState({ movie })
  }

  get genres() {
    const { genres } = this.state.movie
    return (
      <View style={styles.genres}>
        {genres.map(({ name }, index) => <Text key={index} style={styles.genre}>{name}</Text>)}
      </View>
    )
  }

  render() {
    const { navigation: { navigate } } = this.props
    const { movie } = this.state
    if (!movie) return null
    const { title, vote_average, overview, poster_path, backdrop_path, runtime, revenue, budget, release_date, cast } = movie
    return movie && (
      <ImageBackground style={styles.imageBackground} source={{ uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }}>
        <ScrollView style={styles.root}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.firstInformation}>
            <Text style={styles.text}><Icon name="calendar-o" size={18} /> Release date: {release_date}</Text>
            <Text style={styles.voteAverage}>{vote_average}</Text>
          </View>
          {this.genres}
          <Image style={styles.moviePoster} source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }} />
          <Text style={styles.text}>{overview}</Text>
          <Text style={styles.text}><Icon name="clock-o" size={18} /> Duration: {runtime} min</Text>
          <Text style={styles.text}><Icon name="money" size={18} /> Budget: ${numberWithCommas(budget)}</Text>
          <Text style={styles.text}><Icon name="ticket" size={18} /> Revenue: ${numberWithCommas(revenue)}</Text>
          <Text style={styles.actorTitle}>Actors</Text>
          <ScrollView style={styles.actorsScrollView} nestedScrollEnabled>
            <View style={styles.actorsView}>
              {cast.map((actor, index) => (
                <Actor key={index} {...actor} />
              ))}
            </View>
          </ScrollView>
          <View style={styles.button}>
            <Button
              title="Back to Home"
              onPress={() => navigate('Cantoo Movies')} />
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}