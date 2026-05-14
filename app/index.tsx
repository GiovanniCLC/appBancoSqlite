import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native'
import React,{useEffect, useState} from 'react'
import * as sqlite from 'expo-sqlite'
import { getDB } from './database'
import {listarAlunos, AdicionarAlunoDB, RemoverAlunoDB,} from '../src/repositories/AlunoRepository'
import {AlunoForm} from '../src/components/AlunoForm'
import {AlunoList} from '../src/components/AlunoList'
import {Aluno} from '../src/types/Aluno'

export default function HomeScreen(){
    const[dc,setDb]=useState<sqlite.SQLiteDatabase | null>(null)

}
