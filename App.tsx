import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './source/components/CustomButton';
import CustomInput from './source/components/CustomInput';
import { use, useState } from 'react';




export default function App() {
/*funcion para asignar usuario, con el setUsuario, y el 
 useState para crear el estado del usuario, 
 con un objeto que tiene name y age, ambos como string 
 para facilitar la entrada de datos. Luego, se crean dos funciones handleNombreChange y handleAgeChange 
 para actualizar el estado del usuario cuando se cambian los campos de entrada. En el renderizado, 
 se muestra un mensaje de bienvenida si ambos campos están llenos.*/
const handleNombreChange = (text: string) => {
  setUsuario({
    name: text,
    age: user.age
  });
};

const handleAgeChange = (text: string) => {
const onlyNumber = text.replace(/[^0-9]/g, ''); //expresion regular para eliminar cualquier caracter que no sea un numero
  setUsuario({
    name: user.name,
    age: onlyNumber
  });
};

const [user, setUsuario] = useState({name: '', age: ''});





 return (
  <View style={styles.container}> 
    <View style={styles.card}>
        <View style={styles.buttonsWrapper}>

            <CustomInput placeholder="Nombre" value={user.name} onChange={handleNombreChange} text={'Nombre'}/>
            <CustomInput placeholder="Edad" value={user.age}  onChange={handleAgeChange} text={'Edad'}  />

        </View>
  </View>
    {user.name !== '' && user.age !== '' && (
      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Hola, {user.name}. Tienes {user.age} years.
      </Text>
    )}

  </View> 
  
  
);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  backgroundColor: '#eef4f6', 
  alignItems: 'center',
  justifyContent: 'center',
  },
  card: {
  width: '85%',
  paddingVertical: 25,
  paddingHorizontal: 20,
  borderRadius: 12,
  backgroundColor: '#ffffff',
  elevation: 3,
},
  buttonsWrapper: {
    backgroundColor: '#b6cacf', 
    marginTop: 15 , 
      width: '100%',
    alignItems: "center" , 
    justifyContent: "space-around"

  }
});
;






