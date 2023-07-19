import {StyleSheet} from 'react-native'
import {color, typography} from '../../constants'

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    flex: 0,
    position: 'relative',
  },
  headerBackgroundImage: {
    width: '100%',
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerContentBackButton: {
    flex: 0,
    padding: 5,
    marginHorizontal: 15,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  body: {
    bottom: 0,
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },
  upperBody: {
    flex: 0,
    padding: 30,
    borderBottomColor: color['greyscale.300'],
    borderBottomWidth: 1,
  },
  upperBodyTitle: {
    ...typography['heading.h4'],
    color: color['greyscale.900'],
    marginBottom: 5,
  },
  upperBodyText: {
    ...typography['body.medium.regular'],
    color: color['greyscale.500'],
  },

  middleBody: {flex: 0, padding: 30},
  middleBodyTitle: {
    ...typography['heading.h6'],
    color: color['greyscale.800'],
    marginBottom: 5,
  },
  middleBodyText: {
    ...typography['body.medium.regular'],
    color: color['greyscale.700'],
  },
  lowerBody: {flex: 1, paddingHorizontal: 30},
  lowerBodyTitle: {
    ...typography['heading.h6'],
    color: color['greyscale.800'],
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
    backgroundColor: color['greyscale.100'],
    borderRadius: 5,
  },
  lowerBodySubjectItemIcon: {
    flex: 0,
    fontSize: 35,
    color: color['greyscale.800'],
    marginRight: 15,
  },
  lowerBodySubjectItemTextView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  lowerBodySubjectName: {
    ...typography['body.large.medium'],
    color: color['greyscale.800'],
  },
  lowerBodySubjectDesc: {
    ...typography['body.medium.regular'],
    color: color['greyscale.600'],
  },
})

export default styles
