import{ View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Inicio({navigation}){
  return(
    <View style={styles.container}>
      <Image
      source={require("./novalogo.png")}
      style={styles.logo}
      />
      
      <TouchableOpacity style={styles.Login} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.TextLogin} >LOGIN</Text>
       </TouchableOpacity>

      <TouchableOpacity style={styles.Newaccout} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.Textaccount}>CRIAR CONTA</Text>
      </TouchableOpacity>
     
    </View>
    
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    },


  logo:{
    marginBottom: 100,
    

  },
  Login: {
    marginBottom:60,
    width: 250,
    height: 50, 
    backgroundColor: "#00366B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
   },


   TextLogin:{
    color: "#fff"
   },


   Newaccout:{
    marginBottom: 60,
    width: 250,
    height: 50, 
    backgroundColor: "#00366B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    fontSize: 20
   
   },


   Textaccount:{
    color: "#fff",
  }
})