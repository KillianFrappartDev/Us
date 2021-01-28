import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

// Local imports
import CustomButton from '../../components/ButtonTemplate/ButtonFullRed/index';
import logo from '../../assets/logo.png';
import styles from './styles';

const WelcomeScreen = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <Text style={styles.slogan}>meet anywhere, anyday</Text>
      <CustomButton text="Login" handlePress={() => props.navigation.navigate('LoginScreen')} />
      <CustomButton text="Signup" handlePress={() => props.navigation.navigate('SignupScreen')} />
      <TouchableOpacity
        onPress={() =>
          dispatch({ type: 'LOGIN', payload: { id: null, fullname: null, gender: null, image: null, birthdate: null } })
        }
      >
        <Text style={styles.guest}>Continue as guest.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
