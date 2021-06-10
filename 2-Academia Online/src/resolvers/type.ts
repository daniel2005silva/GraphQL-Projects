import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';

const type : IResolvers = {
    Estudante: {
        courses: parent => {
           const cursosLista : Array<any> = [];
           parent.courses.map((curso: string) => {
               cursosLista.push(_.filter(database.cursos, ['id', curso])[0])
           });
           return cursosLista;
       }
    },
    Curso: {
        estudantes: parent => {
            const listaEstudantes: Array<any> = [];
            const idCurso = parent.id;
            database.estudantes.map((estudante: any) => {
                if(estudante.courses.filter ( (id: any ) => id === idCurso) > 0){
                    listaEstudantes.push(estudante)
                }
            });
            return listaEstudantes;
        },
        path: parent => `https://www.udemy.com${parent.path}`
    }
}

export default type;