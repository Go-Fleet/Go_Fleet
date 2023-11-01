import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { Text, View } from '../../components/Themed';
import BottomSheet from '@gorhom/bottom-sheet';


export default function TabOneScreen() {
  const snapPoints = useMemo(() => ['8%', '40%'], []);
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome,</Text>
      
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
    height: 60,
  },
  title: {
    fontSize: 26,
  },
  bottomSheetHeadline: {
    fontSize: 19,
    paddingLeft: 10,
    paddingBottom: 25,
    color: '#82AD4B',
    borderStyle: 'solid',
    border: 1,
    borderBottomColor: 'red',
    borderBottomWidth: 1,  },
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
