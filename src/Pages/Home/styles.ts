import { StyleSheet } from 'react-native';
import { theme } from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  filter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center',
  },
  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.primary,
  },
  filterTextInatived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.background,
    opacity: 0.5,
  },
  content: {
    width: '100%',
    marginTop: 30,
  },
  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: theme.colors.background,
    alignItems: 'center',
  },
  titleText: {
    backgroundColor: theme.colors.text,
    color: theme.colors.background,
    fontSize: 18,
    top: 11,
    paddingHorizontal: 10,
  }
});