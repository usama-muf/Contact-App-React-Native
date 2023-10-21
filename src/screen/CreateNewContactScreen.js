import { View, Text } from 'react-native'
import React from 'react'
import NewContact from '../component/add_contact/NewContact'

export default function CreateNewContactScreen() {
  return (
    <View style={{ flex: 1 }}>
      <NewContact />
    </View>
  )
}
