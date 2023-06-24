import {StyleSheet} from 'react-native'
import {color, typography} from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  courseImage: {
    width: '100%',
    height: 280,
    overflow: 'hidden',
  },

  courseTitle: {
    ...typography['heading.h4'],
    color: color['Greyscale.900'],
    fontWeight: 500,
    marginTop: -12,
    paddingHorizontal: 16,
  },
  courseDescription: {
    ...typography['body.large.regular'],
    color: color['Greyscale.700'],
    marginTop: 12,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    ...typography['heading.h6'],
    color: color['Greyscale.900'],
    fontWeight: 700,
    marginTop: 16,
    marginBottom: 4,

    paddingHorizontal: 16,
  },
  courseFeatureimage: {
    width: 24,
    height: 24,
  },
  couseFeatureText: {
    ...typography['body.large.regular'],
    color: color['Greyscale.900'],
    marginLeft: 12,
  },
  chapterNum: {
    ...typography['heading.h4'],
    color: color['info.400'],
    fontWeight: '600',
    backgroundColor: color['info.100'],
    width: 40,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 2,
  },
  chapterTitle: {
    ...typography['body.large.regular'],
  },
})

export default styles
