import { View, Text } from 'react-native'
import React, { useState } from 'react'
import style from './searchContact.style'
import { TextInput } from 'react-native-gesture-handler'

export default function SearchContact({ onSearchTextChange }) {
  // const [searchText, setSearchText] = useState('')
  // console.log(searchText)

  const handleSearchTextChange = (text) => {
    onSearchTextChange(text)
  }

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        // value={searchText}
        onChangeText={handleSearchTextChange}
        keyboardType="default"
        maxLength={30}
        placeholder={'🔍 Search by Name'}
      />
    </View>
  )
}
