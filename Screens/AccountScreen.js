import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-web';
import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native';
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
{/* Apple */}
      <View style={styles.style6}>
      <TouchableOpacity style={styles.buttonContinueWithApple} >
        <Image source={require('../assets/DATA/apple.png')} style={styles.iconStyle}/>
        <Text style={styles.buttonText1}>Continue with Apple</Text>
      </TouchableOpacity>
   {/* Facebook */}
      <TouchableOpacity style={styles.buttonContinueWithFB}>
      <Image source={require('../assets/DATA/facebook.png')} style={styles.iconStyle}/>
         <Text style={styles.buttonText2}>Continue with Facebook</Text>
      </TouchableOpacity>
 {/* Google */}
      <TouchableOpacity style={styles.buttonContinueWithGoogle} >
      <Image source={require('../assets/DATA/google.png')} style={styles.iconStyle}/>
         <Text style={styles.buttonText3}>Continue with Google</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.style7}> 
            <Text style={styles.textNote}>By signing up, you agree to our </Text>
         <Text style={styles.textNote}>
            <Text style={{textDecorationLine: 'underline'}}>Terms of Service</Text> and{' '}
            <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>
        </Text>
      </View>
      <View style={styles.style8}> 
          <Text style={styles.textQuestionAccount}>Already had an account? <Text style={{textDecorationLine: 'underline', color:'#3b9eef'}}>Log in </Text> </Text>
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
        },
        style6:{
          marginTop:10

        },
        buttonContinueWithApple:{
          width: '100%',
          maxWidth: 350,
          borderColor:"black",
          borderWidth: 0.5,
          borderRadius: 5,
          paddingVertical: 12,
          flexDirection: 'row', // Để căn chỉnh biểu tượng và văn bản nằm ngang
          justifyContent: 'center', // Căn giữa nội dung
          alignItems: 'center', // Căn giữa theo chiều dọc
          marginTop: 10, 
          marginLeft:20,
        },
        buttonContinueWithFB:{
          width: '100%',
          maxWidth: 350,
          borderColor:'#3b9eef',
          borderWidth: 0.5,
          borderRadius: 5,
          paddingVertical: 12,
          flexDirection: 'row', // Để căn chỉnh biểu tượng và văn bản nằm ngang
          justifyContent: 'center', // Căn giữa nội dung
          alignItems: 'center', // Căn giữa theo chiều dọc
          marginTop: 10, 
          marginLeft:20
        },
        buttonContinueWithGoogle:{
          width: '100%',
          maxWidth: 350,
          borderColor:'#d3403c',
          borderWidth: 0.5,
          borderRadius: 5,
          paddingVertical: 12,
         flexDirection: 'row', // Để căn chỉnh biểu tượng và văn bản nằm ngang
          justifyContent: 'center', // Căn giữa nội dung
          alignItems: 'center', // Căn giữa theo chiều dọc
          marginTop: 10, 
          marginLeft:20
        },
        buttonText1:{
          color: 'black',
          fontWeight:500,
        },
        buttonText2:{
          color: '#3b9eef',
          fontWeight:500
        },
        buttonText3:{
          color: '#d3403c',
          fontWeight:500
        },
        style7:{
          alignItems:'center',
          marginTop:20
        },
        textNote:{
          color:'gray',
          fontSize:12
        },
        style8:{
          alignItems:'center',
          marginTop:150
        },
        iconStyle:{
          marginRight: 5
        }
    })
    
    export default AccountScreen;