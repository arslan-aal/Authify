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

const Login = () => {
  const navigation = useNavigation();

  const [secureEntery, setSecureEntery] = useState(true);
  // const handleGoBack = () => {
  //   navigation.goBack();
  // };
  const handleSignin = () => {
    navigation.navigate('Signin');
  };
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Hey,</Text>
      <Text style={styles.headingText}>Welcome</Text>
      <Text style={styles.headingText}>Back</Text>

      <View style={styles.formContainer}>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Email"
            placeholderTextColor={colors.primary}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={colors.primary}
            secureTextEntry={secureEntery}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntery(prev => !prev);
            }}>
            <SimpleLineIcons name={'eye'} size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Login</Text>
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
          <TouchableOpacity onPress={handleSignin}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
//onPress={handleSignup}
export default Login;

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
    //fontFamily: fonts.SemiBold,
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
    // fontFamily: fonts.SemiBold,
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    // fontFamily: fonts.Regular,
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
    // fontFamily: fonts.SemiBold,
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
    //  fontFamily: fonts.Regular,
  },

  signupText: {
    //  color: colors.primary,
    // fontFamily: fonts.Bold,
    fontWeight: 'bold', // Make the text bold
    color: 'blue', // Set the color to blue (you can replace with any color)
    fontSize: 18,
  },
});
