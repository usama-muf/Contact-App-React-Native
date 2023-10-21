import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screen/HomeScreen'
import ContactListScreen from '../screen/ContactListScreen'
import FavoriteContactListScreen from '../screen/FavoriteContactListScreen'
import CreateNewContactScreen from '../screen/CreateNewContactScreen'
import UpdateContactScreen from '../screen/UpdateContactScreen'
import RecentContacts from '../component/add_contact/RecentContacts'
const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Contacts" component={ContactListScreen} />
        <Stack.Screen name="Create New" component={CreateNewContactScreen} />
        <Stack.Screen name="Favorite" component={FavoriteContactListScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Update" component={UpdateContactScreen} />
        <Stack.Screen name="Recent" component={RecentContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
