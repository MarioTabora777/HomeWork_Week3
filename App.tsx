import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
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
      
const [counter, setCounter] = useState(0);


 const handleSum = () => {
    setCounter(counter + 1);
  }; 

  const handleRestar = () => {
    setCounter(counter - 1);
  }; 

const esPar = counter % 2 === 0;

 return (
  <View style={styles.container}> 
    <View style={styles.card}>
        <View style={styles.buttonsWrapper}>

            <CustomInput placeholder="Nombre" value={user.name} onChange={handleNombreChange} text={'Nombre'}/>
            <CustomInput placeholder="Edad" value={user.age}  onChange={handleAgeChange} text={'Edad'}  />

        </View> 

         <Text style={styles.title}>Contador</Text> 
         <Text style={styles.counterValue}>{counter}</Text>  

        {/* validar que no sea negativo */}
          {counter < 0 && (
          <Text style={styles.warningText}>
            No se recomienda valores negativos
          </Text>
        )} 

        {/*validar pares  */}
         <Text style={[styles.parImparText, esPar ? styles.par : styles.impar]}>
          {esPar ? 'Número par' : 'Número impar'}
        </Text> 

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button} onPress={handleRestar}>
            <Text style={styles.buttonText}>Restar -1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSum}>
            <Text style={styles.buttonText}>Sumar +1</Text>
          </TouchableOpacity>
        </View>

  </View>
    {user.name !== '' && user.age !== '' && (
      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Hola, {user.name}. Tienes {user.age} years.
      </Text>
    )}
    <StatusBar style="auto" />
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

  } ,
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111827',
  },
  counterValue: {
    fontSize: 48,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  }, warningText: {
    marginTop: 6,
    marginBottom: 10,
    color: '#b91c1c', 
    fontSize: 14,
  },

  parImparText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 18,
  },

  par: {
    color: 'blue',
  },

  impar: {
    color: 'purple',
  },

  buttonsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#2e4566',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },

});
;






