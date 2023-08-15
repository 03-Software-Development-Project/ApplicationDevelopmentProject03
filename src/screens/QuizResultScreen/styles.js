import {StyleSheet, Dimensions} from 'react-native'
import {typos, colors} from '../../constants'

const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors['info.900'],
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
    ...typos['heading.h3'],
    color: 'white',
    paddingTop: 30,
    paddingBottom: 10,
  },
  bodyText: {
    ...typos['body.medium.medium'],
    color: 'white',
    marginBottom: 10,
  },
  bodyHighlightedText: {
    ...typos['body.xlarge.bold'],
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
    ...typos['body.large.bold'],
    textAlign: 'center',
    color: colors['info.800'],
  },
})
