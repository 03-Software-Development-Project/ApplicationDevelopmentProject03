import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  outerTopSafeArea: {
    flex: 0,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
  },
  innerTopSafeArea: {
    position: 'absolute',
    width: '100%',
  },
  body: {
    bottom: 40,
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },
  upperBody: {
    flex: 0,
    padding: 30,
    borderBottomColor: colors['greyscale.300'],
    borderBottomWidth: 1,
  },
  upperBodyTitle: {
    ...typos['heading.h4'],
    color: colors['greyscale.900'],
    marginBottom: 5,
  },
  upperBodyText: {
    ...typos['body.medium.regular'],
    color: colors['greyscale.500'],
  },

  middleBody: {flex: 0, padding: 30},
  middleBodyTitle: {
    ...typos['heading.h6'],
    color: colors['greyscale.800'],
    marginBottom: 5,
  },
  middleBodyText: {
    ...typos['body.medium.regular'],
    color: colors['greyscale.700'],
  },
  lowerBody: {flex: 1, paddingHorizontal: 30},
  lowerBodyTitle: {
    ...typos['heading.h6'],
    color: colors['greyscale.800'],
  },
  lowerBodySrollViewContainer: {flex: 1, paddingTop: 20},
  lowerBodySrollViewContent: {flex: 1},
  lowerBodySubjectItem: {
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
  lowerBodySubjectItemIcon: {
    flex: 0,
    fontSize: 35,
    color: colors['greyscale.800'],
    marginRight: 15,
  },
  lowerBodySubjectItemTextView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  lowerBodySubjectName: {
    ...typos['body.large.medium'],
    color: colors['greyscale.800'],
  },
  lowerBodySubjectDesc: {
    ...typos['body.medium.regular'],
    color: colors['greyscale.600'],
  },
})
