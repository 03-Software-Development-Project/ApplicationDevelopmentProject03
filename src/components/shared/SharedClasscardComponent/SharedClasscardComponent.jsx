import React from 'react'
import {FlatList, Image, Text, View} from 'react-native'
import {typography} from '../../../constants'
import styles from './styles'

const classes = [
  {
    id: '1',
    image: require('../../../assets/img/Class01.png'),
    courseID: 'LIFESTYLE101',
    courseTitle:
      'Mastering a Healthy and Balanced Lifestyle for Optimal Well-being',
    courseDate: '2023-06-05',
  },
  {
    id: '2',
    image: require('../../../assets/img/Class02.png'),
    courseID: 'CODING202',
    courseTitle:
      'Comprehensive Coding: From Fundamentals to Advanced Techniques',
    courseDate: '2023-06-07',
  },
  {
    id: '3',
    image: require('../../../assets/img/Class03.png'),
    courseID: 'MEDITATE303',
    courseTitle:
      'Meditation and Mindfulness: Cultivating Inner Peace and Clarity',
    courseDate: '2023-06-10',
  },
  {
    id: '4',
    image: require('../../../assets/img/Class04.png'),
    courseID: 'GUITAR404',
    courseTitle:
      'Unleashing Your Inner Rockstar: Guitar Techniques and Musical Theory',
    courseDate: '2023-06-12',
  },
  {
    id: '5',
    image: require('../../../assets/img/Class05.png'),
    courseID: 'ARTISTRY505',
    courseTitle:
      'The Artistic Journey: Exploring Boundless Creativity and Self-Expression',
    courseDate: '2023-06-15',
  },
]

function SharedClasscardComponent() {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={classes} // Assuming `classes` is an array containing the data for the list
        renderItem={({item: classItem}) => (
          <View style={styles.classCard}>
            <Image
              source={classItem.image}
              style={styles.classCardImage}
            />
            <View style={{paddingVertical: 8}}>
              <Text
                style={[
                  styles.classCardTitle,
                  typography['body.large.medium'],
                ]}>
                {classItem.courseTitle}
              </Text>
              <View
                style={{
                  paddingVertical: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  style={{width: 20, height: 20, marginRight: 4}}
                  source={require('../../../assets/icons/@calendar_icon.png')}
                />
                <Text
                  style={[
                    styles.classCardDate,
                    typography['body.medium.regular'],
                  ]}>
                  {classItem.courseDate}
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id} // Assuming `id` is a unique identifier for each item
      />
    </View>
  )
}

export default SharedClasscardComponent
