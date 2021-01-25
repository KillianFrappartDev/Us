import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

// Local imports
import styles from './styles';
import ButtonFullRed from '../../components/ButtonTemplate/ButtonFullRed/index.js';
import ButtonFullGreen from '../../components/ButtonTemplate/ButtonFullGreen/index.js';
import HobbieTemplate from '../../components/HobbieTemplate/index.js';
import hobbiesTest from '../../utils/hobbiesTest.js';

const HobbiesScreen = props => {
  const [hobby, setHobby] = useState(null);
  const handlePress = () => {
    Alert.alert('Saved!');
  };

  const maping = () => {
    return hobbiesTest.map(item => (
      <HobbieTemplate key={item.key} imageUri={item.imageUri} hobby={item.hobby} onSelect={item => setHobby(item)} />
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Pick your hobbies</Text>

      <View style={styles.gridHobbies}>{maping()}</View>

      <View style={styles.btnContainer}>
        <ButtonFullRed text={'Save'} handlePress={() => props.navigation.navigate('EventEditScreen', { hobby })} />
      </View>
    </View>
  );
};

export default HobbiesScreen;
