import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const [email, setEmail] = useState('');  
  const [phone, setPhone] = useState('');  

    const [password, setPassword] = useState('');

  const [secureEntery, setSecureEntery] = useState(true);
  const navigation = useNavigation();

  const handleAuth = () => {
    if (email === '' || phone === '' || password === '') {
      alert('Please fill in all fields (email, phone, and password).');
    } else {
     
      alert('SignIn Successful');
      navigation.navigate('Home'); 
    }
  };
  

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Lest's get</Text>
      <Text style={styles.headingText}>Started</Text>

      <View style={styles.formContainer}>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Email"
            placeholderTextColor={colors.primary}
            keyboardType="email-address"
            value={email}  
            onChangeText={(text) => setEmail(text)}  
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone no"
            placeholderTextColor={colors.primary}
            secureTextEntry={secureEntery}
            keyboardType="phone-pad"
            value={phone}  // Bind email state
            onChangeText={(text) => setPhone(text)}  
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={colors.primary}
            secureTextEntry={secureEntery}
            value={password}  // Bind password state
            onChangeText={(text) => setPassword(text)}  
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntery(prev => !prev);
            }}>
            <SimpleLineIcons name={'eye'} size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleAuth}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require('../assests/Google.png')}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Signin;

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    marginHorizontal: 10,
    fontFamily: 'bold',
  },
  formContainer: {
    marginTop: 20,
  },

  InputContainer: {
    borderWidth: 1,
    borderRadius: 100,
    marginHorizontal: 10,
    borderColor: '#808080',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginVertical: 10,
  },

  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: 'black',
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: colors.primary,
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  loginButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 20,
    marginHorizontal: 10,
  },
  loginText: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    marginHorizontal: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
  },

  signupText: {
  
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 18,
  },
});
