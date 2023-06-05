import { StyleSheet } from 'react-native';
import { scale } from '../../constants/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(16)
  },
  ttt: {
    width: '100%',
    height: '80%',
    backgroundColor: 'red'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  listItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  padding: {
    padding: scale(60),
  }
});

export default styles;
