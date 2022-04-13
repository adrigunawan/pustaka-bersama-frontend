
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <><ImageBackground
      style={styles.container}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2019/03/03/20/23/flowers-4032775__340.png',
      }}
    >
    </ImageBackground><View style={styles.container}>
        <Text>Yahahahaha wahyu a5 semur jengkol :*</Text>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#ffff',
    backgroundColor: '#FF00D1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  },
});
