import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './contactNavigatorBtns.style'

//used <a target="_blank" href="https://icons8.com/icon/91644/replay">recent</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export default function ContactNavigatorBtns({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navigatorBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Recent')}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../../assets/icons/recent-30.png')}
              style={styles.icon}
            />
            <Text style={styles.navigatorBtnTxt}>Recent</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.navigatorBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../../assets/icons/favorite-30.png')}
              style={styles.icon}
            />
            <Text style={styles.navigatorBtnTxt}>Favorite</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.navigatorBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../../assets/icons/contacts-24.png')}
              style={styles.icon}
            />
            <Text style={styles.navigatorBtnTxt}>Contacts</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
