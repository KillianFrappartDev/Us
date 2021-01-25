import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Local imports
import styles from './styles';

const HobbieTemplate = ({ hobby, imageUri, onSelect }) => {
  const [isPress, setIsPress] = React.useState(false);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.textHobbies}
          onPress={() => {
            setIsPress(prevstate => !prevstate);
            onSelect({ hobby, imageUri });
          }}
        >
          <Image style={isPress ? styles.pickedHobbies : styles.imageHobbies} source={imageUri} />
          <Text> {hobby} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HobbieTemplate;
