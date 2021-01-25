import React from 'react';
import { View, Text, Button, Image } from 'react-native';

// Local Imports
import PLACEHOLDER from '../../assets/placeholder.png';
import Form from '../../components/FormTemplate/index';
import styles from './styles';

const editForm = [
  {
    id: 1,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Title',
    multiline: false,
    type: 'name',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 2,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Description',
    multiline: true,
    type: 'none',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 3,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Address',
    multiline: true,
    type: 'fullStreetAddress',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 4,
    render: 'date',
    label: 'Start Date',
    value: new Date()
  },
  {
    id: 5,
    render: 'date',
    label: 'End Date',
    value: new Date()
  }
];

const submitEvent = data => console.log('FORM, ', data);

const EventEditScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={PLACEHOLDER} />
          <Button title="Upload" onPress={() => console.log('Click')} />
        </View>
        <Form inputs={editForm} onSubmit={submitEvent} />
      </View>
    </View>
  );
};

export default EventEditScreen;
