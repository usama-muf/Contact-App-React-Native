import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ContactCard from '../component/general/ContactCard'
import SearchContact from '../component/general/SearchContact'
import {
  listAllContacts,
  listContactsBySearchedName,
} from '../database/db-service'
import style from '../component/add_contact/addContactBtn.style'

export default function ContactListScreen({ navigation }) {
  const [contactsData, setContactsData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAllContacts = async (searchText) => {
      try {
        const data = await listContactsBySearchedName(searchText)
        setContactsData(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching contacts:', error)
        setIsLoading(false) // Set loading state to false even on error
      }
    }
    fetchAllContacts(searchText)
  }, [searchText])

  // const renderContacts = () => {
  //   return contactsData.map((data, index) => (
  //     <ContactCard key={data.id} contactData={data} navigation={navigation} />
  //   ))
  // }
  const renderContacts = () => {
    return <ContactCard contactData={contactsData} navigation={navigation} />
  }

  const handleSearchTextChange = (text) => {
    setSearchText(text)
  }
  console.log('search text at contactList screent ', searchText)

  return (
    <View style={{ flex: 1 }}>
      <SearchContact onSearchTextChange={handleSearchTextChange} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : contactsData.length > 0 ? (
        renderContacts()
      ) : (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            padding: 10,
          }}
        >
          No contacts found
        </Text>
      )}
    </View>
  )
}
