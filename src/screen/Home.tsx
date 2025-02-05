import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
//import React from 'react';
import {colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

const Home = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(100));
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignin = () => {
    navigation.navigate('Signin');
  };
  useEffect(() => {
    Animated.sequence([
      // Fade-in effect
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      // Slide-up effect
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assests/pic.png')} style={styles.logo} />
      {/* <Text style={styles.title}>Authify</Text> */}
      <Animated.View
        style={[
          styles.titleContainer,
          {
            opacity: fadeAnim,
            transform: [{translateY: slideAnim}],
          },
        ]}>
        <Text style={styles.title}>Authify</Text>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.loginButtonWrapper, {backgroundColor: colors.primary}]}
          onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleSignin}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // justifyContent: 'center', // Vertically center the content
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginVertical: 10,
  },
  // title: {
  //   fontSize: 40, // Larger font size for a prominent title
  //   fontWeight: 'bold', // Bold text for emphasis
  //   color: '#ff6347', // Vibrant color (tomato red) for the title
  //   textAlign: 'center', // Center the text horizontally
  //   letterSpacing: 2, // Slight spacing between letters for a stylish effect
  //   textTransform: 'uppercase', // Make the title uppercase for a stronger impact
  //   textShadowColor: '#000', // Add a shadow effect to the text
  //   textShadowOffset: {width: 2, height: 2}, // Slight offset for the shadow
  //   textShadowRadius: 5, // Radius for the shadow effect to make it soft
  //   marginTop: 20, // Add some space above the title
  //   fontFamily: 'Cochin', // Use a stylish font family (you can use any available font)
  // },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 90,
    borderWidth: 1,
    borderColor: 'colors.primary',
    width: '90%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    //backgroundColor: colors.primary,
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: '600',
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: '600',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 5,
    marginTop: 20,
    fontFamily: 'Cochin',
  },
});
