import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Aluno} from '../types/Aluno'

type Props={aluno:Aluno,onRemover:(id:number)=>void}

export function AlunoItem({aluno,onRemover}:Props){
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.nome}>{aluno.nome}</Text>
                <Text style={styles.email}>{aluno.email}</Text>
            </View>
            <TouchableOpacity onPress={() => onRemover(aluno.id)}>
                <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:12,
        borderBottomWidth:1,
        borderColor:"#acabad",
    },
    nome:{fontSize:16, fontWeight:"700"},
    email:{fontSize:16, color:"#cac1c1"},
    remover:{fontWeight:"700", color:"#e40505"},

})  