import {StyleSheet} from 'react-native'
import {color, typography} from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
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
    color: color['greyscale.900'],
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
    color: color['greyscale.900'],
  },

  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bodyTitle: {
    ...typography['heading.h4'],
    color: color['greyscale.800'],
  },
  bodySubtitle: {
    ...typography['body.medium.regular'],
    color: color['greyscale.500'],
  },

  bodyChapterOverview: {
    flex: 0,
    paddingTop: 20,
  },
  bodyChapterOverviewItem: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  bodyChapterOverviewItemImage: {
    flex: 0,
    height: '100%',
    resizeMode: 'contain',
    marginRight: 15,
  },
  bodyChapterOverviewItemTextView: {
    flex: 1,
  },
  bodyChapterOverviewItemUpperText: {
    ...typography['heading.h5'],
    color: color['success.500'],
  },
  bodyChapterOverviewItemLowerText: {
    ...typography['body.large.medium'],
    color: color['greyscale.7 00'],
  },
  bodyHeading: {
    ...typography['heading.h6'],
    color: color['greyscale.800'],
    paddingVertical: 10,
  },
  bodyText: {
    ...typography['body.medium.regular'],
    color: color['greyscale.700'],
    lineHeight: 25,
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
    backgroundColor: color['info.500'],
    borderRadius: 15,
  },
  footerButtonText: {
    ...typography['body.large.bold'],
    textAlign: 'center',
    color: 'white',
  },
})

export default styles
