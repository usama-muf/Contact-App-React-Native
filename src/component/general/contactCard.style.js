import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // flex: 1,
    // borderWidth: 2,
    // backgroundColor: 'green',
    // padding: 5,
    // margin: 10,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // alignSelf: 'flex-start',
    // width: '100%',
    // alignContent: 'flex-start',
  },
  card: {
    // flex: 1,
    // borderWidth: 1,
    width: '100%',
    // borderColor: 'lightgray',
    // borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  cardTouch: {},
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    // marginBottom: 10,
  },
  star: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 0,
    marginRight: 40,
  },
  name: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  mobile: {
    fontSize: 16,
  },
  landline: {
    fontSize: 16,
  },

  backTextWhite: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  rowFront: {
    marginBottom: 5,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    // height: 50,
  },
  rowBack: {
    alignItems: 'center',
    // backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    // justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    marginBottom: 10,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'rgba(50, 124, 240, 0.5)',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'rgba(255, 30, 0, 0.5)',
    right: 0,
  },
})

export default styles
