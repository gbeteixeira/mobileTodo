import { StyleSheet } from 'react-native';
import { theme } from '../../Theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 10,
    width: '90%',
    height: 80,
    borderRadius: 10,
    shadowColor: theme.colors.shape,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeActive: {
    width: 50,
    height: 50,
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  cardDate: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardTime: {
    color: theme.colors.note,
  },
  done: {
    opacity: 0.5
  }
});