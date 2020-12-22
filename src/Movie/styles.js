import { StyleSheet } from 'react-native'

const defaultText = {
  color: 'white',
  marginBottom: 10
}

export const styles = StyleSheet.create({
  actorsScrollView: {
    width: '95%',
    maxHeight: 500,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
  },
  actorsView: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  imageBackground: { height: '100%' },
  firstInformation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: { fontSize: 25 },
  genres: {
    marginTop: 5,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  genre: {
    padding: 2,
    marginRight: 5,
    borderRadius: 3,
    backgroundColor: 'rgb(33, 150, 243)',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    color: 'white'
  },
  voteAverage: {
    fontSize: 28,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    minWidth: 50,
    textAlign: 'center',
    padding: 4,
    borderRadius: 30,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'yellow',
    color: 'yellow',
    fontWeight: '600',
  },
  moviePoster: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 3
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    ...defaultText
  },
  root: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    padding: '5%',
    minHeight: '100%'
  },
  title: { fontSize: 32, ...defaultText },
  actorTitle: { fontSize: 28, ...defaultText },
  button: {
    width: 120,
    marginBottom: 40,
    marginTop: 20
  }
})