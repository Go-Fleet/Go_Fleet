import { Pressable, StyleSheet } from 'react-native';
import { useMemo, useState } from 'react';
import { Text, View } from '../../components/Themed';
import BottomSheet from '@gorhom/bottom-sheet';


export default function TabOneScreen() {
  const snapPoints = useMemo(() => ['8%', '40%'], []);
  const onPress = () => {
      alert('Button pressed!');
     };
     const [checked, setChecked] = useState(false);

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
      
      <Text style={styles.title}>Welcome,</Text>
      </View>
      <Pressable onPress={onPress} style={styles.googlemaps}>
        <Text style={styles.text}>Google Maps</Text>
      </Pressable>
      
      <Pressable onPress={onPress} style={styles.bookingbutton}>
        <Text style={styles.text}>From:    December 9, 11:30 AM</Text>
        <Text style={styles.text}>To:         December 29, 8:30 PM</Text>
      </Pressable>


      <View style={styles.wrapper}>
        <Text style={styles.subtext}>Same Return & Delivery Location?</Text>
        
        <Pressable
        style={[
          styles.checkbox,
          { backgroundColor: checked ? '#7AA04A' : '#666' },
        ]}
        onPress={() => setChecked(!checked)}
      />
     
   </View>
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
  },
  header: {
    width: '82%',
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
  },
  googlemaps: {
    paddingHorizontal: 10,
    paddingVertical: 26,
    borderRadius: 5,
    width: '86%',
    paddingTop: 40,
    marginVertical: 40,
    backgroundColor: 'gray',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 12,
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
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 12,
    alignItems: 'center',
    width: '86%',
  },
  text: {
    color: '#fff',
    fontSize: 18,
   },
   subtext: {
    fontSize: 10,
    color: '#fff',
    marginLeft: 140,
   },
   checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
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
