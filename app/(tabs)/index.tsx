import { Pressable, StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { Text, View } from '../../components/Themed';
import BottomSheet from '@gorhom/bottom-sheet';



export default function TabOneScreen() {
  const snapPoints = useMemo(() => ['8%', '40%'], []);
  const onPress = () => {
      alert('Button pressed!');
     };

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
      
      <Text style={styles.title}>Welcome,</Text>
      </View>
      <Pressable onPress={onPress} style={styles.googlemaps}>
        <Text style={styles.text}>Google Maps</Text>
      </Pressable>
      <Pressable onPress={onPress} style={styles.bookingbutton}>
        <Text style={styles.text}>Choose a Location</Text>
      </Pressable>
      <Pressable onPress={onPress} style={styles.bookingbutton}>
        <Text style={styles.text}>Choose a Vehicle Type</Text>
      </Pressable>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Get Booking Results</Text>
      </Pressable>



      <BottomSheet 
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: '#454545'}}
        handleIndicatorStyle={{ display: 'none'}}>
          <Text style={styles.bottomSheetHeadline}>Winter Time Deals!</Text>
          <View style={styles.bottomsheetborder}> 
            <Text style={styles.bottomSheetText}>Invite Friend for first Time, Receive 15% off next Booking! </Text>
            <Text style={styles.bottomSheetText}>Receive 15% off your first weekly booking! </Text>
          </View>
      </BottomSheet>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  header: {
    backgroundColor: 'red',
    width: '94%',
    marginTop: 10,
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
  },
  googlemaps: {
    padding: 10,
    borderRadius: 5,
    width: '86%',
    paddingTop: 40,
    marginVertical: 40,
    backgroundColor: 'gray',
  },
  bookingbutton:{
    backgroundColor: 'rgba(122, 122, 122, 0.2)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '86%',
    marginBottom: 20,
    marginTop: 10,
 },
  button: {
    backgroundColor: '#7AA04A',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '86%',
  },
  text: {
    color: '#fff',
    fontSize: 18,
   },

  bottomSheetHeadline: {
    fontSize: 19,
    paddingLeft: 10,
    paddingBottom: 25,
    color: '#82AD4B',},
  bottomSheetText: {
    color: '#82AD4B',
    paddingLeft: 10,
    fontSize: 14,
    paddingTop: 15,
    paddingBottom: 15,
    alignContent: 'center',
  },
  bottomsheetborder: {
    borderColor: 'gray',
    backgroundColor: '#454545',
    borderTopWidth: 1,
  
    
  }
 
});
