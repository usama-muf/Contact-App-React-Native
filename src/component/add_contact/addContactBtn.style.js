import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: '#3c96e6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
})

export default style
