import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bodyTitle: {
    ...typos['heading.h4'],
    color: colors['greyscale.800'],
  },
  bodySubtitle: {
    ...typos['body.medium.regular'],
    color: colors['greyscale.500'],
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
    ...typos['heading.h5'],
    color: colors['success.500'],
  },
  bodyChapterOverviewItemLowerText: {
    ...typos['body.large.medium'],
    color: colors['greyscale.7 00'],
  },
  bodyHeading: {
    ...typos['heading.h6'],
    color: colors['greyscale.800'],
    paddingVertical: 10,
  },
  bodyText: {
    ...typos['body.medium.regular'],
    color: colors['greyscale.700'],
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
    backgroundColor: colors['info.500'],
    borderRadius: 15,
  },
  footerButtonText: {
    ...typos['body.large.bold'],
    textAlign: 'center',
    color: 'white',
  },
})
