import { StyleSheet } from 'react-native';
import { theme } from '../../Theme';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 5,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 30,
  },
  notification: {
    position: 'absolute',
    right: 20,
  },
  notificationImage: {
    width: 30,
    height: 35,
  },
  circle: {
    width: 25,
    height: 25,
    backgroundColor: theme.colors.text,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 13,
    bottom: 13,
  },
  notificationText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
  },
  leftIconImage: {
    width: 30,
    height: 30,
  }
});