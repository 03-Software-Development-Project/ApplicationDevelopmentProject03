import {StyleSheet} from 'react-native'
import {color, typography} from '../../constants'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 0,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: color['greyscale.100'],
    borderWidth: 1,
    borderColor: color['greyscale.300'],
  },
  formContainer: {
    marginTop: 8,
  },
  header: {
    color: color['primary.500'],
  },
  button: {
    height: 56,
    width: '100%',
    backgroundColor: color['greyscale.900'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 24,
  },
  logo: {
    width: 100,
    height: 60,
  },

  // Typos
  title: {...typography['heading.h4'], color: color['greyscale.900']},
  subtitle: {
    ...typography['body.large.regular'],
    color: color['greyscale.500'],
  },
  label: {
    ...typography['body.medium.semibold'],
    marginHorizontal: 8,
    paddingVertical: 4,
  },

  buttonText: {
    ...typography['body.large.bold'],
    fontWeight: 'bold',
    color: color['greyscale.50'],
  },
  // Colors
})

export default styles
