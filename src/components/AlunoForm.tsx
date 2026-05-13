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