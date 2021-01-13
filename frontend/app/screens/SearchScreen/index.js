import React, {useState} from 'react';
import { View, Image, Text, Alert, TextInput } from 'react-native';

// Local imports
import logo from '../../assets/logo.png';
import styles from './styles';
import ButtonFilter from '../../components/ButtonTemplate/ButtonFilter';
import Form from '../../components/FormTemplate/index';
import FabsTemplate from '../../components/FabsTemplate/index';



const Separator = () => (
  <View style={styles.separator} />
);


const editForm = [
  {
    id: 1,
    render: 'date',
    label: 'Start Date',
    value: new Date()
  },
  {
    id:2,
    render: 'date',
    label: 'End Date',
    value: new Date()
  }
];

 

const SearchScreen = props => {
  // const [isSelected, setSelected] = useState("false");
  

    const onLongPress= () => {
      Alert.alert('jai ete clicker')
      }

      

    const activities = [{ 
      name : "RESTAURANT", 
      isSelected: false
    },
    {
      name : "BAR",
       isSelected: false
    },
    {
      name : "AFTER WORKS",
       isSelected: false
    } 
    ];


    const [selectedActivities, setSelectedActivities] = useState(activities);
    
    const selectActivity = (activity ) => {
      console.log(activity)
      // console.log(selectedActivities)

      const updatedSelectedActivities = selectedActivities.map(element => {
        if(element.name == activity){
          console.log('is match')
        
          return({ 
            ...element, 
            isSelected: !element.isSelected
          })
        } else {
           return({...element})
        }
      });

       console.log(updatedSelectedActivities)

       setSelectedActivities(updatedSelectedActivities)
    }


    const hostGenders = [{
      name: "FEMALE",
      isSelected : false
    },
    {
      name: "MALE",
      isSelected :false
    } 
  ];



  const [selectedGenders, setSelectedGenders] = useState(hostGenders);
    
    const selectGender = (gender) => {
      console.log(gender)
      //  console.log(selectedGenders)

      const updatedSelectedGenders = selectedGenders.map(element => {
        if(element.name === gender){
          console.log('is match')
        
           return({ 
            ...element, 
            isSelected: !element.isSelected
          })
        } else {
           return({...element})
        }
       });

         console.log(updatedSelectedGenders)

        setSelectedGenders(updatedSelectedGenders)
    }


    const keywords= [{
      name: "BRUXELLES",
      isSelected: false
    },
    {
      name: "MUSEUM",
      isSelected: false
    }
   ]



   const [selectedKeywords, setSelectedKeywords] = useState(keywords);
    
    const selectKeyword = (keyword) => {
      console.log(keyword)
      //  console.log(selectedGenders)

      const updatedSelectedKeywords = selectedKeywords.map(element => {
        if(element.name == keyword){
          console.log('is match')
        
           return({ 
            ...element, 
            isSelected: !element.isSelected
          })
        } else {
           return({...element})
        }
       });

         console.log(updatedSelectedKeywords)

        setSelectedKeywords(updatedSelectedKeywords)
    }



  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.filter}>My Filters</Text>
      <Separator />

      <Text style={styles.filtertext}>ACTIVITY</Text> 

        <View style= {styles.containerFilter}>
           {selectedActivities.map((activity) => {
            // console.log(activity)
              return(      
                 <ButtonFilter key={activity.name} text={activity.name} handlePress={selectActivity} isSelected={activity.isSelected}/>
           )
          })}
        </View>
         <Separator />

        <Text style={styles.filtertext}>HOSTED BY</Text>
        <View style={styles.containerFilter}> 
          {selectedGenders.map(gender => {
           return( 
            <ButtonFilter key={gender.name} text={gender.name} handlePress={selectGender} isSelected={gender.isSelected} />
          )
         })}
        </View> 
         <Separator />

        <Text style={styles.filtertext}>KEYWORDS</Text>
        <View style={styles.containerFilter}> 
          {selectedKeywords.map(keyword => {
             return( 
            <ButtonFilter key={keyword.name} text={keyword.name} handlePress={selectKeyword} isSelected={keyword.isSelected} />
          )
         })}
        </View>
         <Separator />



          <FabsTemplate onLongPress={onLongPress} name={'pencil-circle-outline'}  color={"black"} />

          <Text style={styles.filtertext}>DATE</Text>
        <View style={styles.containerFilterDate}>

        
         <Form inputs={editForm} onSubmit={val => console.log(val)} />
        
        </View>
        
    </View>
  );
};

export default SearchScreen;
