import {StyleSheet} from 'react-native'
import {typos, colors} from '../../../constants'

const styles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors['info.900'],
  },
  btn: {
    flex: 0,
    padding: 5,
    borderColor: colors['greyscale.50'],
    borderWidth: 2,
    borderRadius: 10,
  },
  btnIcon: {
    fontSize: 25,
    color: colors['greyscale.50'],
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    ...typos['heading.h5'],
    textAlign: 'center',
    color: colors['greyscale.50'],
  },
})

const styleUtils = StyleSheet.create({
  borderWidth: (number) => ({
    borderWidth: number,
  }),
  opacity: (number) => ({
    opacity: number,
  }),
})

const presets = {
  simple: StyleSheet.create({
    header: {...styles.header, backgroundColor: 'white'},
    btn: {...styles.btn, borderColor: colors['greyscale.300']},
    btnIcon: {...styles.btnIcon, color: colors['greyscale.900']},
    title: {...styles.title, color: colors['greyscale.900']},
  }),
  transparent: StyleSheet.create({
    header: {...styles.header, backgroundColor: 'transparent'},
    btn: {...styles.btn, borderColor: colors['greyscale.50']},
    btnIcon: {...styles.btnIcon, color: colors['greyscale.50']},
    title: {...styles.title, color: colors['greyscale.50']},
  }),
}

export default styles
export {presets}
export const {borderWidth, opacity} = styleUtils
