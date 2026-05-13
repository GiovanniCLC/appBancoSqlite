import {View, TextInput,TouchableOpacity, StyleSheet, Text} from 'react-native';

type Props={
    nome: string,
    email: string,
    onChangeNome:()=>void,
    onChangeEmail:()=>void,
    onSubmit:()=>void
}

export function AlunoForm({nome, email, onChangeNome, onChangeEmail, onSubmit}:Props){
    return (
       <View>
        <TextInput/>
        <TextInput/>
        <TouchableOpacity>
            <Text>Remover</Text>
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

textobotao:{
    color:"#F50909",
    fontSize:16,
    fontWeight:"700",
},

})