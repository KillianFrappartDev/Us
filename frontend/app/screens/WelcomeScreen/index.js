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
      <Button title="Login" onPress={() => props.navigation.navigate('LoginScreen')} />
      <Button title="Signup" onPress={() => props.navigation.navigate('SignupScreen')} />
      <Button title="Filters" onPress={() => props.navigation.navigate('FiltersScreen')} />

      <CustomButton text="Login" handlePress={() => props.navigation.navigate('LoginScreen')} />
      <CustomButton text="Signup" handlePress={() => props.navigation.navigate('SignupScreen')} />
      <TouchableOpacity onPress={() => dispatch({ type: 'LOGIN' })}>
        <Text style={styles.guest}>Continue as guest.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
