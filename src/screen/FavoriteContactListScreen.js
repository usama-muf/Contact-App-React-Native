import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import ContactCard from '../component/general/ContactCard'
import { listAllFavoriteContacts } from '../database/db-service'

export default function FavoriteContactListScreen() {
  const [contactsData, setContactsData] = useState('')

  useEffect(() => {
    const fetchAllFavourit = async () => {
      const data = await listAllFavoriteContacts()
      console.log('Fav ', data)
      setContactsData(data)
    }
    fetchAllFavourit()
  }, [])

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <ContactCard contactData={contactsData} />
    </View>
  )
}
