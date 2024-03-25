import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: '100%', // Adjust as needed
    resizeMode: 'contain',
  },
  thumbnail: {
    width: 100,
    height: 100,
    margin: 5,
  },
  thumbnailContainer: {
    alignItems: 'center',
  },
  arrowLeft: {
    position: 'absolute',
    left: 0,
    zIndex: 10,
  },
  arrowRight: {
    position: 'absolute',
    right: 0,
    zIndex: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    backgroundColor: '#f0f0f0',
  },
  hidden: {
    width: 0,
    height: 0,
  },
});

export default styles;
