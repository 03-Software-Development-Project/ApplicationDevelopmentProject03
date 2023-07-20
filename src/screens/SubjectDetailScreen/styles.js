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
    ...typography['heading.h4'],
    color: color['Greyscale.900'],
    marginBottom: 15,
  },
  bodySubjectDesc: {
    ...typography['body.large.regular'],
    color: color['Greyscale.700'],
    marginBottom: 15,
  },
  bodySubjectOverview: {
    flex: 0,
  },
  bodySubjectOverviewTitle: {
    ...typography['heading.h6'],
    color: color['Greyscale.900'],
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
    ...typography['body.large.regular'],
    color: color['Greyscale.900'],
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
    borderBottomColor: color['primary.500'],
    borderBottomWidth: 4,
  },
  footerTitle: {
    ...typography['heading.h5'],
    color: color['primary.600'],
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
    backgroundColor: color['greyscale.100'],
    borderRadius: 5,
  },
  footerChapterItemIcon: {
    flex: 0,
    fontSize: 35,
    color: color['greyscale.800'],
    marginRight: 15,
  },
  footerChapterItemTextView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  footerChapterName: {
    ...typography['body.large.medium'],
    color: color['greyscale.800'],
  },
  footerChapterDesc: {
    ...typography['body.medium.regular'],
    color: color['greyscale.600'],
  },
})

export default styles
