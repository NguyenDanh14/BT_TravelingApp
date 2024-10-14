import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-web';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';



const AccountScreen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const countries = [
    { label: 'United States ', value: 'US' },
    { label: 'Vietnam ', value: 'VN' },
    { label: 'Canada ', value: 'CA' },
    { label: 'Australia', value: 'AU' },
    { label: 'Japan ', value: 'JP' },
   
  ];
  const Continue = () => {
    if (phoneNumber === '') {
      Alert.alert('Error', 'Please enter your phone number');
    } else {
      // Ví dụ sử dụng React Navigation để điều hướng đến màn hình tiếp theo
      Alert.alert('Success', `Phone number: ${phoneNumber}`);
      // Bạn có thể điều hướng sang trang khác bằng cách uncomment dòng dưới
      // navigation.navigate('NextScreen');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text style={styles.textCreate}>Create an account</Text>
      </View>
      <View style={styles.style1}>
        <Text style={styles.textPhone}>Enter your mobile number:</Text>
      </View>
      <View style={styles.style2}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedCountry(value)}
          items={countries}
          placeholder={{ label: 'Select country', value: null }}
          style={{
            inputIOS: styles.selectCountry,  // Style cho iOS
            inputAndroid: styles.selectCountry,  // Style cho Android
          }}
        />
      </View>
      <View style={styles.style3}>
          <TextInput
             style={styles.inputNumber}
             placeholder="+1 Mobile number"
             keyboardType="phone-pad"
             value={phoneNumber}
             onChangeText={setPhoneNumber}
         />
      </View>
      <View style={styles.style4}>
      <TouchableOpacity style={styles.buttonContinue} onPress={Continue}>
                    <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.style5}>
        <Text style={styles.TextOr}>or</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      style1:{
        marginLeft:20,
        marginTop:40
      },
      textCreate:{
        fontSize:18,
        fontWeight:700
      },
      textPhone:{
        fontSize:16,
      },
      style2:{
        marginTop:10,
        marginLeft:20,
        width:110
        
      },
      selectCountry: {
        fontSize: 16,
        paddingVertical: 16, // Tăng chiều cao của picker
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        color: 'black',
        height: 100, // Tăng chiều cao của picker
      },
        inputSelectCountry: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 14,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 40,
          color: 'black',
          paddingRight: 30, 
          
        },
        style3:{
            marginLeft:160,
            marginTop:-20,
        },
        inputNumber: {
            height: 40,
            width:210,
            borderColor: 'gray',
            color:"gray",
            borderWidth: 1,
            paddingLeft: 10,
            borderRadius: 5,
          },
          buttonContinue: {
            width: '100%',
            maxWidth: 350,
            backgroundColor: '#00bdd6', 
            borderRadius: 5,
            paddingVertical: 12,
            alignItems: 'center',
            marginTop: 10, 
            marginLeft:20
        },
        buttonText:{
            color: '#fff',
            fontSize: 16,
            
        },
        style5:{
            alignItems:"center",
            marginTop:5
        }
    })
    
    export default AccountScreen;