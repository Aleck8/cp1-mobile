// styles/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantNameContainer: {
    padding: 15,
    alignItems: 'center',
  },
  restaurantNameBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 1,
  },
  darkModeContainer: {
    backgroundColor: 'transparent',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    width: '80%',
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  pratoContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  pratoImagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  pratoDescricao: {
    padding: 15,
    fontSize: 18,
  },
  darkModeText: {
    color: '#fff',
  },
  darkModeBackground: {
    backgroundColor: '#2c3e50',
  },
});
