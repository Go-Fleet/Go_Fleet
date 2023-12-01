import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { useMemo, useState } from 'react';
import { Text, View } from '../../components/Themed';
import BottomSheet from '@gorhom/bottom-sheet';
import { Image } from 'react-native';


import Colors from '../../constants/Colors';


export default function TabOneScreen() {
  const colorScheme = useColorScheme() ?? 'light';


  const snapPoints = useMemo(() => ['8%', '40%'], []);
  const onPress = () => {
      alert('Button pressed!');
     };
     const [checked, setChecked] = useState(false);


    
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
      
      <Text style={styles.title}>Welcome,</Text>
      <Image style={styles.image} source={require('../../assets/images/ProfilePic.png')} />
      </View>
      <Pressable onPress={onPress} style={styles.googlemaps}>
        <Text style={styles.text}>Google Maps</Text>
      </Pressable>
      
      <Pressable onPress={onPress} 
      style={[styles.bookingbutton,{ backgroundColor: Colors[colorScheme].secondaryBackground },]}>
        <Text style={styles.text}>From:    December 9, 11:30 AM</Text>
        <Text style={styles.text}>      To:    December 29, 8:30 PM</Text>
      </Pressable>


      <View style={styles.wrapper}>
        <Text style={[styles.bookingbutton,{ color: Colors[colorScheme].text },]}>Same Return & Delivery Location?</Text>
        
        <Pressable
        style={[
          styles.checkbox,
          { backgroundColor: checked ? '#7AA04A' : '#666' },
        ]}
        onPress={() => setChecked(!checked)}
      />
     
   </View>
      <Pressable onPress={onPress} 
        style={[styles.bookingbutton,{ backgroundColor: Colors[colorScheme].secondaryBackground },]}>
        <Text style={styles.text}>Choose a Location</Text>
      </Pressable>
      <Pressable onPress={onPress} 
      style={[styles.bookingbutton,{ backgroundColor: Colors[colorScheme].secondaryBackground },]}>
        <Text style={styles.text}>Choose a Vehicle Type</Text>
      </Pressable>
      <Pressable onPress={onPress} style={[styles.button, { backgroundColor: Colors[colorScheme].bookingResultsColor },]}>
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
    flexDirection: 'row',
   justifyContent: 'space-between',
    width: '90%',
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
    flex: 1,
  },
  image: {
    width: 35,
    height: 35,
  },
  googlemaps: {
    paddingHorizontal: 10,
    paddingVertical: 26,
    borderRadius: 5,
    width: '86%',
    marginHorizontal: '14%',
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
    color: '#000',
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
    color: '#82AD4B',
    marginLeft: 120,},
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
