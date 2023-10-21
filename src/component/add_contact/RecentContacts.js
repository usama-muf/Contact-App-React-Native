import { View, Text } from 'react-native'
import React from 'react'

export default function RecentContacts() {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontStyle: 'italic',
          paddingTop: 80,
        }}
      >
        RecentContacts{'\n'} To Do{'\n'}Not included in the assignment's
        requirement
      </Text>
    </View>
  )
}
