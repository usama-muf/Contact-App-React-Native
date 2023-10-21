import { View, Text, Image, SafeAreaView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './contactCard.style'
import { TouchableOpacity, TouchableHighlight } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { ScrollView } from 'react-native-virtualized-view'
import { deleteContact } from '../../database/db-service'
import defaultIcon from '../../assets/icons/person-24.png'
import filledStar from '../../assets/icons/star-filled-48.png'
import blankStar from '../../assets/icons/star-blank-32.png'

export default function ContactCard({ contactData, navigation }) {
  // const imageSource = (url) => {
  //   console.log('url:', url)
  //   url === null
  //     ? defaultIcon
  //     : { uri: `file://${contactData.profilePhotoUrl}` }
  // }

  const [listData, setListData] = useState([])

  // useEffect(() => {
  //   const dataObject = { ...contactData, key: contactData.id }
  //   const dataArray = [dataObject]
  //   setListData(dataArray)
  // }, [contactData])
  //   Array(20)
  //     .fill('')
  //     .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  // )

  const closeRow = (rowMap, rowKey) => {
    // console.log(rowMap, rowKey)
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
  }

  const editRow = (rowKey) => {
    return navigation.navigate('Update', { rowKey })
  }

  const renderItem = (data) => {
    return (
      <TouchableOpacity
        onPress={() => console.log('You touched me')}
        style={styles.rowFront}
        underlayColor={'#AAA'}
      >
        <View style={styles.card}>
          <Image
            source={
              data.item.profilePhotoUrl === null
                ? defaultIcon
                : { uri: `file://${data.item.profilePhotoUrl}` }
            }
            style={styles.photo}
          />
          <View>
            <Text style={styles.name}>👤{data.item.name}</Text>
            <Text style={styles.name}>📞{data.item.phoneNumber}</Text>
            <Text style={styles.name}>☎️{data.item.landlineNumber}</Text>
          </View>
          <Image
            source={data.item.isFavorite ? filledStar : blankStar}
            style={styles.star}
          />
        </View>
      </TouchableOpacity>
    )
  }

  const showDeleteConfirmation = (rowMap, rowKey) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteRow(rowMap, rowKey),
          style: 'destructive',
        },
      ],
      { cancelable: false }
    )
  }

  const deleteRow = (rowMap, rowKey) => {
    // console.log(rowMap, rowKey)
    // console.log(listData)
    closeRow(rowMap, rowKey)
    deleteContact(listData[0].id)
    // const newData = [...listData]
    // const prevIndex = listData.findIndex((item) => item.key === rowKey)
    // newData.splice(prevIndex, 1)
    setListData('')
  }

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => editRow(data.item.key)}
      >
        <Text style={styles.backTextWhite}>Edit 🖋️</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => showDeleteConfirmation(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete 🗑️</Text>
      </TouchableOpacity>
    </View>
  )

  // const onRowDidOpen = (rowKey) => {
  //   console.log('This row opened', rowKey)
  // }
  return (
    <ScrollView>
      {contactData &&
        contactData.map((data, index) => {
          const dataObject = { ...data, key: data.id }
          return (
            <View key={dataObject.key} style={styles.container}>
              <SwipeListView
                data={[dataObject]}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                // onRowDidOpen={onRowDidOpen}
              />
            </View>
          )
        })}
    </ScrollView>
  )

  // return (
  // <SafeAreaView style={styles.card}>
  {
    /* <TouchableOpacity style={styles.cardTouch}> */
  }
  // <SwipeListView
  //   data={data}
  //   renderItem={(data, rowMap) => (
  //     <View style={styles.rowFront}>
  //       <Text>I am {data.name} in a SwipeListView</Text>
  //     </View>
  //   )}
  //   renderHiddenItem={(data, rowMap) => (
  //     <View style={styles.rowBack}>
  //       <Text>Left</Text>
  //       <Text>Right</Text>
  //     </View>
  //   )}
  //   leftOpenValue={75}
  //   rightOpenValue={-75}
  // />

  {
    /* <Image
          source={require('../../assets/images/ppu.jpg')}
          style={styles.photo}
        />
        <Text style={styles.name}>{name}</Text> */
  }
  {
    /* <Text style={styles.mobile}>{`Mobile: ${mobile}`}</Text>
      <Text style={styles.landline}>{`Landline: ${landline}`}</Text> */
  }
  {
    /* </TouchableOpacity> */
  }
  // </SafeAreaView>
  // )
}
