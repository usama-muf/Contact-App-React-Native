import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ContactNavigatorBtns from '../component/contact_navigator/ContactNavigatorBtns'
import AddContactBtn from '../component/add_contact/AddContactBtn'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 5, // For Android shadow
          width: '100%',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          Welcome to Contacts app{'\n'}Toggle below button
        </Text>
      </View>
      <AddContactBtn navigation={navigation} />
      <ContactNavigatorBtns navigation={navigation} />
    </View>
  )
}

{
  /* <TouchableOpacity
  // style={style.addButton}
  onPress={() => navigation.navigate('Create New')}
>
  <Text>Add new</Text>
</TouchableOpacity> */
}
