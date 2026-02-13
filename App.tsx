import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity , Image ,KeyboardTypeOptions   } from 'react-native';
import CustomInput from './source/components/CustomInput';
import { use, useState } from 'react';




export default function App() {

const handleNombreChange = (text: string) => {
  setUsuario({
    name: text,
    age: user.age
  });
};


//funcion que solo permita numeros en el input de edad, y actualice el estado del usuario con el nuevo valor de edad.
const handleAgeChange = (text: string) => {
const onlyNumber = text.replace(/[^0-9]/g, ''); //expresion regular para eliminar cualquier caracter que no sea un número
  setUsuario({
    name: user.name,
    age: onlyNumber
  });
}; 

 
 
const [user, setUsuario] = useState({name: '', age: ''});
      
const [counter, setCounter] = useState(0); 

  const [mostrarDetalles, setMostrarDetalles] = useState(false); 

  //negando el estado para mostrar detalles, y asi poder alternar entre mostrar y ocultar detalles del usuario.
  const handleToggle = () => {
    setMostrarDetalles(!mostrarDetalles);
  };



 const handleSum = () => {
    setCounter(counter + 1);
  }; 

  const handleRestar = () => {
    setCounter(counter - 1);
  }; 

        {/*flag validar pares (comportamiento condicionado) */}
const esPar = counter % 2 === 0; 

 return (
  <View style={styles.container}> 
    <View style={styles.card}>
        <View style={styles.buttonsWrapper}>

            <CustomInput placeholder="Nombre" value={user.name} onChange={handleNombreChange} text={'Nombre'} typeInput={'text'} />
            <CustomInput placeholder="Edad" value={user.age}  onChange={handleAgeChange} text={'Edad'} typeInput={'numeric'} />

        </View> 

         <Text style={styles.title}>Contador</Text> 
         <Text style={styles.counterValue}>{counter}</Text>  

        {/* validar que no sea negativo */}
          {counter < 0 && (
          <Text style={styles.warningText}>
            No se recomienda valores negativos
          </Text>
        )} 

        {/* estilo condicionado */}
         <Text style={[styles.parImparText, esPar ? styles.par : styles.impar]}>
          {esPar ? 'Número par' : 'Número impar'}
        </Text> 

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.buttonSmall} onPress={handleRestar}>
            <Text style={styles.buttonText}>Restar -1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSmall} onPress={handleSum}>
            <Text style={styles.buttonText}>Sumar +1</Text>
          </TouchableOpacity> 
       
        </View>  
{/* toggle para mostrar detalles del usuario, con un mensaje condicionado al estado del toggle, y una imagen de ejemplo.   */}
         <TouchableOpacity style={styles.buttonFull} onPress={handleToggle}>
          <Text style={styles.buttonText}>
            {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
          </Text>
        </TouchableOpacity>

       
    

  </View> 
    {user.name !== '' && user.age !== '' && (
      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Hola, {user.name}. Tienes {user.age} años.
      </Text>
    )}  

    
    <StatusBar style="auto" />  


  

     {mostrarDetalles ? (
          <View style={styles.detailsContainer}>
            <Text style={styles.description}>
              Detalles del usuario...
            </Text>

            <Image
              source={{
                uri: 'https://picsum.photos/200'
              }}
              style={styles.image}
            />
          </View>
        ) : (
          <Text style={styles.hiddenText}>
            Detalles ocultos
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
  marginTop: 15,
  width: '100%',
  alignItems: 'center',
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

 buttonSmall: {
  flex: 1,
  paddingVertical: 14,
  borderRadius: 8,
  backgroundColor: '#2e4566',
  alignItems: 'center',
},

buttonFull: {
  width: '100%',
  paddingVertical: 14,
  borderRadius: 8,
  backgroundColor: '#2e4566',
  alignItems: 'center',
  marginTop: 12,
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
    detailsContainer: {
    alignItems: 'center', 
  }, 

    hiddenText: {
    fontSize: 16,
    color: '#6b7280',
  },
 image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  }, 

  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#111827',
  },

});
;






