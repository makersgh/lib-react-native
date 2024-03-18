import { theme } from 'lib_theme';

const styles = {
  iconDefaultColor: theme.colors.primary,
  iconDefaultSize: 25,
  container: {
    // ...theme.input,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
  },
  iconRight: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontSize: 12,
    textAlign: 'left',
    color: theme.colors.text,
  },
  placeHolderTextColor: {
    default: '#C7C7CD',
  },
};

export default styles;
