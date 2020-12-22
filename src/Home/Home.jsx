import React from 'react'
import { Component } from 'react'
import { View, Image, TouchableHighlight, Text, ImageBackground, FlatList, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { API_KEY } from '../utils'

export class Home extends Component {
  movies = []
  state = {
    page: 0,
    isFetching: false
  }

  componentDidMount() {
    this.getInitialMovies()
  }

  getInitialMovies = async () => {
    const page = 1
    const movies = await this.getLatestMovies(page)
    this.movies.push(...movies)
    this.setState({ page })
  }

  getLatestMovies = async (page) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
    const { results } = await response.json()
    const movies = results.map(({ id, poster_path, title }) => ({ id, poster_path, title }))
    return movies
  }

  getMoreMovies = async () => {
    const newPage = this.state.page + 1
    const movies = await this.getLatestMovies(newPage)
    this.movies.push(...movies)
    this.setState({ page: newPage })
  }

  renderMovie = ({ item: { id, poster_path, title }, index }) => {
    const { navigation: { navigate } } = this.props
    return (
      <TouchableHighlight key={index} style={styles.movie} onPress={() => navigate('Movie', { id })}>
        {poster_path
          ? <Image style={styles.posterImage} source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }} /> : (
            <View style={styles.withoutPoster}>
              <Text size={60} style={{ textAlign: 'center' }}>{title}</Text>
            </View>
          )
        }
      </ TouchableHighlight>
    )
  }

  renderHeader = () => {
    return <Text style={styles.header}>{'Latest movies'}</Text>
  }

  renderFooter = () => {
    const { isFetching } = this.state
    return !isFetching && (
      <View>
        <ActivityIndicator animating size="large" color="white" />
      </View>
    )
  }

  onRefresh = async () => {
    this.setState({ isFetching: true })
    this.movies = []
    await this.getInitialMovies()
    this.setState({ isFetching: false })
  }

  render() {
    return (
      <ImageBackground style={styles.imageBackground} source={{ uri: 'https://wallpaperaccess.com/full/2063914.jpg' }}>
        <FlatList
          onRefresh={this.onRefresh}
          refreshing={this.state.isFetching}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          style={styles.flatList}
          numColumns={2}
          data={this.movies}
          extraData={this.extraMovies}
          renderItem={this.renderMovie}
          keyExtractor={item => item.title}
          onEndReachedThreshold={0.10}
          onEndReached={this.getMoreMovies} />
      </ImageBackground >
    )
  }
}