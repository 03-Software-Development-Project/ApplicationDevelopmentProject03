import React, {useEffect} from 'react'
import {ScrollView, Text, View, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useSelector, useDispatch} from 'react-redux'
import {
  enrollClass,
  getClasses,
  openEnrollPrompt,
  dismissEnrollPrompt,
  classesSelector,
  enrollPromptSelector,
  isAppDebugModeOnSelector,
} from './HomeScreenViewModel'
import {ClassCardSwiper, Category} from './components'
import {
  SharedClassCard,
  SharedDebugNavBar,
  SharedHeader,
  SharedInputPrompt,
} from '../../components/shared'
import styles from './styles'

function HomeScreen({navigation}) {
  const dispatch = useDispatch()
  const isAppDebugModeOn = useSelector(isAppDebugModeOnSelector)
  const classes = useSelector(classesSelector)
  const {
    selectedClassId,
    visible,
    title,
    subtitle,
    textInput,
    submitBtnText,
    cancelBtnText,
  } = useSelector(enrollPromptSelector) ?? {}

  const openSideDrawer = () => {
    navigation.openDrawer()
  }

  const navigateToSearchScreen = () => {
    navigation.navigate('Search')
  }
  const navigateToClassDetailScreen = () => {
    navigation.navigate('ClassDetailStack', {screen: 'ClassDetail'})
  }

  const classEnrollmentHandler = (classId) => {
    if (classId) {
      return async (joinCode) => {
        await dispatch(enrollClass(classId, joinCode))
        navigateToClassDetailScreen()
      }
    }
    return null
  }

  const startClassEnrollment = (classId) => () => {
    dispatch(openEnrollPrompt(classId))
  }
  const cancelClassEnrollment = () => {
    dispatch(dismissEnrollPrompt())
  }

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getClasses())
    }
    fetchData()
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(dismissEnrollPrompt())
    })
    return unsubscribe
  }, [dispatch, navigation])

  return (
    <SafeAreaView style={styles.safeArea}>
      <SharedInputPrompt
        visible={visible}
        title={title}
        subtitle={subtitle}
        textInput={textInput}
        submitBtn={{
          text: submitBtnText,
          onPress:
            classEnrollmentHandler(selectedClassId) ??
            navigateToClassDetailScreen,
        }}
        cancelBtn={{
          text: cancelBtnText,
          onPress: cancelClassEnrollment,
        }}
      />
      {isAppDebugModeOn ? <SharedDebugNavBar navigation={navigation} /> : null}
      <SharedHeader
        title="Mind Snap"
        preset="simple"
        btns={{
          left: {
            iconName: 'menu',
            onPress: openSideDrawer,
          },
          right: {
            iconName: 'search',
            noBorder: true,
            onPress: navigateToSearchScreen,
          },
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <ClassCardSwiper classes={classes} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Category</Text>
          <Text style={styles.sectionSeeMore}>All Topic</Text>
        </View>
        <Category />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Course for you</Text>
          <Text style={styles.sectionSeeMore}>All Topic</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={classes}
          renderItem={({item}) => (
            <SharedClassCard
              $class={item}
              onPress={startClassEnrollment(item.id)}
            />
          )}
          ItemSeparatorComponent={<View style={{width: 15}} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
