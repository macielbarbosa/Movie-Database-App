import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 32,
    color: 'white',
    marginBottom: 10,
    marginTop: 10
  },
  posterImage: {
    width: 140,
    height: 210,
    borderRadius: 3,
  },
  movie: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20
  },
  flatList: {
    paddingLeft: '3%',
    paddingRight: '5%',
  },
  buttonMoreMovies: {
    marginBottom: 40
  },
  withoutPoster: {
    backgroundColor: 'white',
    borderRadius: 3,
    width: 140,
    height: 210,
    justifyContent: 'center',
    padding: 10
  },
})