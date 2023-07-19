import {StyleSheet, Dimensions} from 'react-native'
import {color, typography} from '../../constants'

const windowWidth = Dimensions.get('window').width
console.log(windowWidth / 2)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: color['info.900'],
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerBackButton: {
    flex: 0,
    padding: 5,
    marginHorizontal: 15,
    zIndex: 1,
    borderColor: color['greyscale.200'],
    borderWidth: 2,
    borderRadius: 10,
  },
  headerBackButtonIcon: {
    fontSize: 25,
    color: 'white',
  },
  headerTitleView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    ...typography['heading.h5'],
    textAlign: 'center',
    color: 'white',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  bodyHeaderImage: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  bodyTitle: {
    ...typography['heading.h3'],
    color: 'white',
    paddingTop: 30,
    paddingBottom: 10,
  },
  bodyText: {
    ...typography['body.medium.medium'],
    color: 'white',
    marginBottom: 10,
  },
  bodyHighlightedText: {
    ...typography['body.xlarge.bold'],
    color: 'white',
    marginBottom: 10,
  },
  footer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  footerButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  footerButtonText: {
    ...typography['body.large.bold'],
    textAlign: 'center',
    color: color['info.800'],
  },
})

export default styles