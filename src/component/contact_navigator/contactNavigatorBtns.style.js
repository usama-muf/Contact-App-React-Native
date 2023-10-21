import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  // container: {
  //   position: 'absolute',
  //   bottom: 0,
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  //   backgroundColor: 'lightgray',
  //   width: '100%',
  //   height: 50,
  // },
  // navigatorBtn: {
  //   padding: 10,
  //   alignItems: 'center',
  //   borderRightWidth: 2,
  //   borderLeftWidth: 2,
  //   borderRadius: 5,
  //   borderColor: 'grey',
  // },
  // buttonContent: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  // },
  // navigatorBtnTxt: {
  //   fontSize: 18,
  //   fontWeight: '800',
  // },
  // icon: {
  //   width: 24,
  //   height: 24,
  //   marginRight: 10,
  // },
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around', // Use space-around for equal spacing
    alignItems: 'center',
    backgroundColor: 'lightgray',
    width: '100%',
    height: 50,
  },
  navigatorBtn: {
    flex: 1, // Use flex to distribute buttons evenly
    padding: 10,
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white', // Add a background color
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navigatorBtnTxt: {
    fontSize: 18,
    fontWeight: 'bold', // Adjust font weight for better readability
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
})

export default styles
