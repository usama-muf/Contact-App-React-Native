import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  ScrollView,
} from 'react-native'
import RNFS from 'react-native-fs'
import styles from './newContact.style'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { createNewContact } from '../../database/db-service'

export default function NewContact() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [landlineNumber, setLandlineNumber] = useState('')
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    }

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('Image picker error: ', response.error)
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri
        if (!validateFileFormat(response)) {
          console.log('File Format Error: ')
          return
        }
        setSelectedImage(imageUri)
      }
    })
  }

  handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    }
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera')
      } else if (response.error) {
        console.log('Camera Error: ', response.error)
      } else {
        // Process the captured image
        let imageUri = response.uri || response.assets?.[0]?.uri
        if (!validateFileFormat(response)) {
          console.log('File Format Error: ')
          return
        }
        setSelectedImage(imageUri)
      }
    })
  }

  // const handleCameraLaunch = () => {
  //   ImagePicker.openCamera({
  //     width: 2000,
  //     height: 2000,
  //     cropping: true, // Enable cropping
  //   })
  //     .then((image) => {
  //       if (!validateFileFormat(image.path)) {
  //         console.log('File Format Error: ')
  //         return
  //       }
  //       setSelectedImage(image.path)
  //     })
  //     .catch((error) => {
  //       console.log('Camera Error: ', error)
  //     })
  // }

  const removeSelectedImageBtn = () => {
    setSelectedImage(null)
  }

  const validateFileFormat = (response) => {
    const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png']
    // const fileType = fileUri.split('.').pop().toLowerCase()
    // console.log('response.assets = ', response.assets[0].type)
    return allowedFormats.includes(response.assets[0].type)
  }

  const saveButtonClicked = async (event) => {
    // event.preventDefaults()
    //save the profile photo in the file system.
    const photoUrl = await saveProfilePhototoFS(selectedImage)
    setProfilePhotoUrl(photoUrl)

    const data = {
      name: name,
      phoneNumber: phoneNumber,
      landlineNumber: landlineNumber,
      isFavorite: isFavorite,
      profilePhotoStorageUrl: photoUrl,
    }

    //save the 'data' to database for further use.
    console.log(data)
    createNewContact(data)
    Alert.alert('Contact Saved Successfully!!')
    clearAllFields()
  }
  const clearAllFields = () => {
    setName('')
    setLandlineNumber('')
    setPhoneNumber('')
    setSelectedImage(null)
    setProfilePhotoUrl(null)
    setIsFavorite(false)
  }

  //this function saved the clicked/selected profile photo to internal file system.
  const saveProfilePhototoFS = async (selectedImagePath) => {
    try {
      // directory to save images
      const directory = RNFS.ExternalDirectoryPath + '/contactsProfilePhotos'

      // Ensure the directory exists
      await RNFS.mkdir(directory)

      //updating the file name
      const timestamp = new Date().getTime()
      const filename = `${timestamp}.jpg`

      await RNFS.moveFile(selectedImagePath, `${directory}/${filename}`)

      //getting the uri where the file is stored.
      const uri = `${directory}/${filename}`
      return uri
    } catch (error) {
      console.log('Error in saving profile photo in File System: ', error)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        inputMode="text"
        maxLength={50}
        onChangeText={(text) => setName(text)}
        placeholder={'Enter Name Here'}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
        placeholder={'Add Phone Number'}
        maxLength={13}
      />

      <Text style={styles.label}>Landline Number:</Text>
      <TextInput
        style={styles.input}
        value={landlineNumber}
        onChangeText={(text) => setLandlineNumber(text)}
        keyboardType="phone-pad"
        maxLength={13}
        placeholder={'Add Landline Number'}
      />

      <Text style={styles.label}>Profile Photo:</Text>

      <View style={styles.profilePhotoBox}>
        <View style={styles.profilePhotoBoxLeft}>
          <View style={styles.buttonContainer}>
            <Button title="Choose from Device" onPress={openImagePicker} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Open Camera" onPress={handleCameraLaunch} />
          </View>
        </View>
        <View style={styles.profilePhotoBoxRight}>
          {selectedImage && (
            <View style={styles.selectedImageBox}>
              <Image
                source={{ uri: selectedImage }}
                style={styles.image}
                resizeMode="contain"
              />
              <TouchableOpacity onPress={removeSelectedImageBtn}>
                <Image
                  source={require('../../assets/icons/delete-50.png')}
                  style={{ width: 40, height: 100 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* 
      <TouchableOpacity onPress={openImagePicker}>
        <View style={styles.imagePicker}>
          {profilePhoto ? (
            <Image source={{ uri: profilePhoto }} style={styles.image} />
          ) : (
            <Text>Choose a profile photo</Text>
          )}
        </View>
      </TouchableOpacity> */}

      <View style={styles.isFavouriteBox}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Add to Favorite:
        </Text>
        <View>
          <Switch
            style={{ fontSize: 49 }}
            value={isFavorite}
            onValueChange={(value) => setIsFavorite(value)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={saveButtonClicked}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
