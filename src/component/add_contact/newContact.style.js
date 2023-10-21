import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#3c96e6',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
  },
  profilePhotoBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    margin: 5,
  },
  imagePicker: {
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  selectedImageBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  isFavouriteBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  saveButton: {
    // position: 'absolute',
    // bottom: 0,
    marginTop: 50,
    marginBottom: 30,
    width: '60%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3c96e6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    // justifyContent: 'flex-end',
    justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    // margin: 10,
    // padding: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default styles
