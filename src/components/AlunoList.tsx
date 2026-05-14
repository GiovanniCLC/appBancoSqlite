import {FlatList, Text, StyleSheet} from 'react-native'
import {Aluno} from '../types/Aluno'
import {AlunoItem} from '../components/AlunoItem'

type Props={
    alunos:Aluno[],onRemover:(id:number)=>void
}

export function AlunoList({alunos,onRemover}:Props){
    return(
        <FlatList
        data={alunos}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=>(
            <AlunoItem aluno={item} onRemover={onRemover} />
        )}
        />
    )
}
const styles=StyleSheet.create({

})