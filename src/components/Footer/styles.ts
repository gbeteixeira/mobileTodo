import { StyleSheet } from 'react-native';
import { theme } from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: theme.colors.background,
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 5,
    borderColor: theme.colors.primary,
    alignItems: 'center',
  },
  botton: {
    position: 'relative',
    top: -40,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    top: -35,
    color: theme.colors.text,
  },
});