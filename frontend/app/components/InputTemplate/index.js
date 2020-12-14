import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const InputTemplate = props => {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
        multiline={props.multiline}
        placeholder={props.placeholder}
        textContentType={props.type}
        secureTextEntry={props.security}
        autoCapitalize={props.autoCapitalize}
      />
    </View>
  );
};

export default InputTemplate;