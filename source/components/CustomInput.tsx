

import {StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardTypeOptions} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

interface Props {
    placeholder:string;
    value: string, 
    text: string, 
    onChange: (text: string) => void; 
    typeInput :  'text' | 'numeric' 


    
}


export default function CustomInput({placeholder,value,text ,onChange,typeInput}: Props){ 
 

    const keyboardType:KeyboardTypeOptions = typeInput === 'numeric' ? 'numeric' : typeInput === 'text' ? 'default' : 'default'; 

 return (

   
    <View style={style.wrapper}>
      
          <View style={style.inputContainer}>
           <MaterialIcons name={"key"} size={20}  color={"black"}> </MaterialIcons>
           <TextInput placeholder={placeholder} value={value} 
           onChangeText={onChange} style={style.input} keyboardType={keyboardType} />
           
        </View>
        <Text>{text}</Text>  
     </View> 
         
  );
} ; 

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 18, 
 
  },

  label: {
    fontSize: 14,
    color: '#374151', 
    marginBottom: 6,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    borderWidth: 1,
    borderColor: '#d1d5db', 
    borderRadius: 8,

    paddingHorizontal: 12,
    height: 44,
    backgroundColor: '#ffffff',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827', 
    width: '100%',   
  },
});