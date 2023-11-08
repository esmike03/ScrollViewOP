import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import guest from './src/Guest';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>LIST OF GUEST</Text>
      {guest.map((guestss)=>{
        return(
          <View>
            <ScrollView>
              <Text style={styles.txt1}>{guestss.name}</Text>
              <Text style={styles.txt2}>{guestss.place}</Text>

            </ScrollView>

          </View>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 20,
    marginTop: 100,
    marginLeft: 30
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 18,

  },
  txt2: {
    
  }
});
