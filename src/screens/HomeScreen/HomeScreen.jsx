import React from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import {useSelector} from 'react-redux'
import img from '../../assets/img'
import {
  SharedClasscardComponent,
  SharedDebugDrawerComponent,
} from '../../components/shared'
import {isAppDebugModeOnSelector} from './HomeScreenViewModel'
import {color, typography} from '../../constants'
import styles from './styles'

function HomeScreen({navigation}) {
  const isAppDebugModeOn = useSelector(isAppDebugModeOnSelector)
  const screenWidth = Dimensions.get('window').width
  const classes = [
    {
      id: '1',
      image: img.Slide01,
      courseID: 'LIFESTYLE101',
      courseTitle:
        'Mastering a Healthy and Balanced Lifestyle for Optimal Well-being',
      courseDate: '2023-06-05',
    },
    {
      id: '2',
      image: img.Slide02,
      courseID: 'CODING202',
      courseTitle:
        'Comprehensive Coding: From Fundamentals to Advanced Techniques',
      courseDate: '2023-06-07',
    },
    {
      id: '3',
      image: img.Slide03,
      courseID: 'MEDITATE303',
      courseTitle:
        'Meditation and Mindfulness: Cultivating Inner Peace and Clarity',
      courseDate: '2023-06-10',
    },
    {
      id: '4',
      image: img.Slide04,
      courseID: 'GUITAR404',
      courseTitle:
        'Unleashing Your Inner Rockstar: Guitar Techniques and Musical Theory',
      courseDate: '2023-06-12',
    },
    {
      id: '5',
      image: img.Slide05,
      courseID: 'ARTISTRY505',
      courseTitle:
        'The Artistic Journey: Exploring Boundless Creativity and Self-Expression',
      courseDate: '2023-06-15',
    },
  ]
  const category = [
    {
      id: '1',
      image: img.Category01,
      categoryTitle: 'Art and Humanities',
      categoryDescription: 'History, Music & Art, Philosophy',
    },
    {
      id: '2',
      image: img.Category02,
      categoryTitle: 'Business',
      categoryDescription: 'Leadership, Finance, Marketing',
    },
    {
      id: '3',
      image: img.Category03,
      categoryTitle: 'Computer Science',
      categoryDescription: 'Software Dev, Mobile, Algorithm',
    },
    {
      id: '4',
      image: img.Category04,
      categoryTitle: 'Design',
      categoryDescription: 'User Interface, 3D Animation',
    },

    {
      id: '5',
      image: img.Category05,
      categoryTitle: 'Finance & Accounting',
      categoryDescription: 'Fincancial Modeling, Investment',
    },
    {
      id: '6',
      image: img.Category06,
      categoryTitle: 'Information Technology',
      categoryDescription: 'Cloud Computing, Security',
    },
  ]
  return (
    <SafeAreaView style={styles.safeArea}>
      {isAppDebugModeOn ? (
        <SharedDebugDrawerComponent navigation={navigation} />
      ) : null}
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer()
            }}>
            <Ionicons
              name="menu"
              size={35}
              color="black"
            />
          </TouchableOpacity>

          <Text style={[typography['heading.h4'], {fontWeight: 700}]}>
            Mind Snap
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search')
            }}>
            <Ionicons
              name="search"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={[{height: 400}]}>
          <Swiper
            loop
            autoplay
            showsButtons={false}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: screenWidth / 5,
                  height: 2,
                  borderRadius: 4,
                  marginLeft: 2,
                  marginRight: 2,
                  marginTop: 2,
                  marginBottom: 2,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#007aff',
                  width: screenWidth / 5,
                  height: 2,
                  borderRadius: 2,
                  marginLeft: 2,
                  marginRight: 2,
                  marginTop: 2,
                  marginBottom: 3,
                }}
              />
            }>
            {classes.map((classItem) => (
              <View
                key={classItem.id}
                style={[{flex: 1}]}>
                <Image
                  source={classItem.image}
                  style={styles.classimage}
                />
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <View
                    style={{
                      width: '30%',
                      borderRadius: 999,
                      overflow: 'hidden',
                      marginBottom: 12,
                    }}>
                    <Text
                      style={[
                        typography['body.xsmall.medium'],
                        {textAlign: 'center'},
                        {backgroundColor: color['Warning.200']},
                        {color: color['Warning.900']},
                        {paddingHorizontal: 16},
                        {paddingVertical: 8},
                      ]}>
                      {classItem.courseID}
                    </Text>
                  </View>
                  <View style={[{paddingBottom: 56}]}>
                    <Text
                      style={[
                        typography['heading.h4'],
                        {textAlign: 'center'},
                        {fontWeight: 600},
                      ]}>
                      {classItem.courseTitle}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </Swiper>
        </View>
        <View style={styles.viewcontainer}>
          <View style={styles.section}>
            <Text style={[typography['heading.h6'], styles.sectionTitle]}>
              Category
            </Text>
            <Text
              style={[
                typography['body.medium.regular'],
                styles.sectionSeeMore,
              ]}>
              All Topic
            </Text>
          </View>
          <ScrollView horizontal>
            <View style={[{flex: 1}, {paddingHorizontal: 20}]}>
              {category.slice(0, 3).map((categoryItem) => (
                <View
                  key={categoryItem.id}
                  style={styles.categoryCell}>
                  <Image
                    source={categoryItem.image}
                    style={styles.categoryImage}
                  />
                  <View style={{paddingHorizontal: 12}}>
                    <Text
                      style={[
                        typography['body.medium.semibold'],
                        styles.categoryName,
                      ]}>
                      {categoryItem.categoryTitle}
                    </Text>
                    <Text
                      style={[
                        typography['body.small.regular'],
                        styles.categoryDescription,
                      ]}>
                      {categoryItem.categoryDescription}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={[{flex: 1}, {paddingHorizontal: 20}]}>
              {category.slice(3, 6).map((categoryItem) => (
                <View
                  key={categoryItem.id}
                  style={styles.categoryCell}>
                  <Image
                    source={categoryItem.image}
                    style={styles.categoryImage}
                  />
                  <View style={{paddingHorizontal: 12}}>
                    <Text
                      style={[
                        typography['body.medium.semibold'],
                        styles.categoryName,
                      ]}>
                      {categoryItem.categoryTitle}
                    </Text>
                    <Text
                      style={[
                        typography['body.small.regular'],
                        styles.categoryDescription,
                      ]}>
                      {categoryItem.categoryDescription}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.viewcontainer}>
          <View style={[styles.section, {marginTop: 24}]}>
            <Text style={[typography['heading.h6'], styles.sectionTitle]}>
              Available Course for you
            </Text>
            <Text
              style={[
                typography['body.medium.regular'],
                styles.sectionSeeMore,
              ]}>
              All Topic
            </Text>
          </View>
          <SharedClasscardComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
