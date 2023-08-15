import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  body: {
    flex: 0,
    paddingHorizontal: 20,
  },
  bodyCard: {
    flex: 0,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bodyCardImage: {
    resizeMode: 'cover',
    width: '100%',
  },
  bodySubjectTitle: {
    ...typos['heading.h4'],
    color: colors['Greyscale.900'],
    marginBottom: 15,
  },
  bodySubjectDesc: {
    ...typos['body.large.regular'],
    color: colors['Greyscale.700'],
    marginBottom: 15,
  },
  bodySubjectOverview: {
    flex: 0,
  },
  bodySubjectOverviewTitle: {
    ...typos['heading.h6'],
    color: colors['Greyscale.900'],
    marginBottom: 5,
  },
  bodySubjectOverviewItem: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 5,
  },
  bodySubjectOverviewItemText: {
    ...typos['body.large.regular'],
    color: colors['Greyscale.900'],
  },
  bodySubjectOverviewItemIcon: {
    fontSize: 24,
    color: 'black',
    marginRight: 10,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  footerTitleView: {
    flex: 0,
    paddingTop: 15,
    paddingBottom: 5,
    borderBottomColor: colors['primary.500'],
    borderBottomWidth: 4,
  },
  footerTitle: {
    ...typos['heading.h5'],
    color: colors['primary.600'],
    marginLeft: 5,
  },

  footerSrollViewContainer: {
    flex: 1,
    paddingTop: 20,
  },
  footerSrollViewContent: {flex: 1},
  footerChapterItem: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors['greyscale.100'],
    borderRadius: 5,
  },
  footerChapterItemIcon: {
    flex: 0,
    fontSize: 35,
    color: colors['greyscale.800'],
    marginRight: 15,
  },
  footerChapterItemTextView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  footerChapterName: {
    ...typos['body.large.medium'],
    color: colors['greyscale.800'],
  },
  footerChapterDesc: {
    ...typos['body.medium.regular'],
    color: colors['greyscale.600'],
  },
})

export default styles
