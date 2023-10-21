import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './addContactBtn.style'

export default function AddContactBtn({ navigation }) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Create New')}
        style={style.button}
      >
        <Text style={style.buttonText}>➕</Text>
      </TouchableOpacity>
    </View>
  )
}
