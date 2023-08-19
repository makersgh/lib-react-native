import { StyleSheet } from 'react-native';
import theme from 'lib_styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  formContainer: {
    // marginTop: 24,
    // marginBottom: 24
  },
  error: {
    color: theme.colors.error,
    marginTop: 5
  }
});
