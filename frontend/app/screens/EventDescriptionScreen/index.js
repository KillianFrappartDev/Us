import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

// Local imports
import styles from './styles';
import ButtonFullRed from '../../components/ButtonTemplate/ButtonFullRed';
import eventTest from '../../utils/eventTest.js';
import hobbiesTest from '../../utils/hobbiesTest.js';
import participantsTest from '../../utils/participantsTest.js';



const EventDescriptionScreen = props => {

  return (
    <View style={styles.container}> 
      <ScrollView>

        <View>
          <Image style={styles.head} source={hobbiesTest[1].imageUri} />
        </View>

        <View style={styles.layer}>

          <View style={styles.viewTitle}>
            <Text style={styles.catTitle}>
              {hobbiesTest[1].hobby} - {''}
            </Text>
            
            <Text style={styles.title}>
              {eventTest[0].title}
            </Text>
          </View>

          <View style={styles.viewTitle}>
            <AntDesign name="clockcircleo" size={15} color="black" /> 
            <Text style={styles.timeAddess}>
              {eventTest[0].time}
            </Text>
          </View>

        </View>

        <View style={styles.layer}>
          <View style={styles.addressStyle}>
              <FontAwesome name="map-marker" size={20} color="black" />
              <Text style={styles.timeAddess}>
                {eventTest[0].address}
              </Text>
          </View>
        </View>

        <View style={styles.layer}>
          <Text style={styles.desc}>Description</Text>
          <Text style={styles.descText}>
            {eventTest[0].description}
          </Text>
        </View>

        <View style={styles.layerWhite}></View>

        <View style={styles.layer}>
          <Text>
            Hosting by 
          </Text>
          <View> 
            <Image style={styles.imgHost} source={participantsTest[0].imageUri} />
          </View>
        </View>

        <View>
          <Text style={styles.layer}>
            People going
          </Text>
        </View>

      </ScrollView>

      <View style={styles.btnContainer} >
        <ButtonFullRed text={'join !'} />
      </View>
      
    </View>
  );
};

export default EventDescriptionScreen;