import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { findContactById } from '../database/db-service'
import UpdateContact from '../component/update_contact/UpdateContact'

export default function UpdateContactScreen({ route, navigation }) {
  const { rowKey } = route.params
  const [contactData, setContactData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  //fetch contact by id.
  useEffect(() => {
    const fetchContactById = async (id) => {
      try {
        const data = await findContactById(id)
        if (data.rows.length > 0) {
          setContactData(data.rows.item(0))
        } else {
          setContactData('No Contacts Found')
        }
        setIsLoading(false) // Data has been fetched, set loading state to false
      } catch (error) {
        console.error('Error fetching contacts:', error)
        setIsLoading(false) // Set loading state to false even on error
      }
    }
    fetchContactById(rowKey)
  }, [])

  // console.log('contactData:  ', contactData)
  // console.log(navigation)

  return (
    <View style={{ flex: 1 }}>
      <UpdateContact contactData={contactData} navigation={navigation} />
    </View>
  )
}
