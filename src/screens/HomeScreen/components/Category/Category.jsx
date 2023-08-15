import React from 'react'
import {View, ScrollView, Image, Text} from 'react-native'
import styles from './styles'
import img from '../../../../assets/img'

function Category() {
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
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View style={styles.column}>
        {category.slice(0, 3).map((item) => (
          <View
            style={styles.cell}
            key={item.id}>
            <Image
              style={styles.image}
              source={item.image}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{item.categoryTitle}</Text>
              <Text style={styles.description}>{item.categoryDescription}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.column}>
        {category.slice(3, 6).map((item) => (
          <View
            key={item.id}
            style={styles.cell}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{item.categoryTitle}</Text>
              <Text style={styles.description}>{item.categoryDescription}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default Category
