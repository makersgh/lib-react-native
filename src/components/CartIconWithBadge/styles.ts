import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    badge: {
      position: 'absolute',
      top: 0,
      right: 17,
      minWidth: 17,
      height: 17,
      borderRadius: 9,
      backgroundColor: '#020202',
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeText: {
      color: 'white',
      fontSize: 10,
    },
  });