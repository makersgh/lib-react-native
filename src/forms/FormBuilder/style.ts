import { StyleSheet } from 'react-native';
import { theme } from 'lib_theme';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor:'white'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  formContainer: {
    // flex: 1
    // marginTop: 24,
    // marginBottom: 24
  },
  error: {
    color: theme.colors.danger,
    marginTop: 5
  }
});
