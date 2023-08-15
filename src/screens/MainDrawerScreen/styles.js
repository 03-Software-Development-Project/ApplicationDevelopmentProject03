import {StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width
const avatarWidth = windowWidth / 5
const avatarHeight = avatarWidth
const avatarBorderRadius = avatarWidth / 2

export default StyleSheet.create({
  drawer: {flex: 1},
  drawerHeader: {
    flex: 8,
    backgroundColor: 'rgba(6, 143, 255, 0.2)',
  },
  drawerHeaderBackgroundImage: {
    flex: 1,
  },
  drawerHeaderContent: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingBottom: 25,
  },
  drawerHeaderContentAvatar: {
    height: avatarHeight,
    width: avatarWidth,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: avatarBorderRadius,
  },
  drawerHeadrContentNameText: {
    color: 'black',
    fontSize: 24,
  },
  drawerHeadrContentEmailText: {
    color: 'black',
    fontSize: 16,
  },
  drawerBody: {
    flex: 18,
  },
  drawerBodyContent: {
    flex: 1,
    paddingTop: 0,
    marginTop: 20,
  },
  drawerBodyContentOptionList: {
    flex: 1,
  },
  drawerFooter: {
    flex: 4,
    paddingHorizontal: 10,
    paddingTop: 25,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  drawerFooterItem: {
    flex: 0,
    marginVertical: 10,
    padding: 5,
  },
  drawerFooterFirstItem: {
    marginTop: 0,
  },
  drawerFooterLastItem: {
    marginBottom: 0,
  },
  drawerFooterItemLabel: {
    marginLeft: -20,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
