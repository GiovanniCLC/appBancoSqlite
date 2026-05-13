import {View, TextInput,TouchableOpacity, StyleSheet, Text} from 'react-native';

type Props={
    nome: string,
    email: string,
    onChangeNome:(v: string)=>void,
    onChangeEmail:(v: string)=>void,
    onSubmit:()=>void
}

export function AlunoForm({nome, email, onChangeNome, onChangeEmail, onSubmit}:Props){
    return (
       <View>
        <TextInput style={styles.input} placeholder='Nome' value={nome} onChangeText={onChangeNome}/>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={onChangeEmail} keyboardType='email-address' autoCapitalize='none'/>
        <TouchableOpacity style={styles.botao} onPress={onSubmit}>
            <Text style={styles.botaotexto}>Adicionar</Text>
        </TouchableOpacity>
       </View> 
    )
}

const styles=StyleSheet.create({
input:{
    borderWidth:1,
    borderColor:"#8e8989",
    borderRadius:5,
    padding:10,
    marginBottom:10,
    fontSize:16,
},

botao:{
    backgroundColor:"#640839",
    padding:14,
    borderRadius:8,
    alignItems:"center",
    marginBottom:20,
},

botaotexto:{
    color:"#F50909",
    fontSize:16,
    fontWeight:"700",
},

})