import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface CustomButtonProp {
title:string;
onClick: ()=>void
variant? : "primary" | "secondary" | "tertiary" /*tipo literal*/



}

export default function CustomButton({title,onClick,variant = 'primary'}:CustomButtonProp ){ 
   const styles = getStyles(variant)
 return (
    <View style ={styles.container}>
     <TouchableOpacity onPress={onClick} >
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      
    </View>
  );
} ;



const getStyles = (variant: "primary" | "secondary" | "tertiary") =>
  StyleSheet.create({
    container: {
      paddingVertical: 15,
      alignItems: 'center',
      width: "80%",
      marginBottom: 12,
      backgroundColor:
        variant === "primary" ? "#2e4566" : variant === "secondary" ? "white" : "gray", 

      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#f3f4f6",
    },
    text: {
      color:
       
        variant === "primary" ? "white" :  variant === "secondary" ? "black" : "white",

      fontSize: 18,
      fontWeight: "500"
    }
  });
