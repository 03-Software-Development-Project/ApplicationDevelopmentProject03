import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

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
  },
  bodyTitle: {...typos['heading.h3'], color: 'white', paddingVertical: 20},
  bodyTextView: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bodyTextViewIcon: {
    fontSize: 24,
    color: 'white',
    marginRight: 5,
  },
  bodyText: {
    ...typos['body.medium.regular'],
    color: 'white',
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
