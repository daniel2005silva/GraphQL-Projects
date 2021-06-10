import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const query : IResolvers = {
    Query: {
        estudantes(): any {
            return database.estudantes;
        },
        estudante(__: void, { id }): any {
            const resultado = database.estudantes.filter(estudante => estudante.id === id) [0];
            if(resultado === undefined){
                return {
                    id: '-1',
                    name: `Não foi possível encontrar o estudante com ID ${id}`,
                    email: '',
                    courses: []
                }
            }
            return resultado;
        },
        cursos(): any {
            return database.cursos;
        },
        curso(__: void, { curso }): any {
            const resultado = database.cursos.filter(curso_ => curso_.id === curso) [0];
            if(resultado === undefined){
                return {
                    id: '-1',
                    title: `Não foi possível encontrar o curso com ID ${curso}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'TODOS',
                    path: '',
                    teacher: '',
                    reviews: []
                }
            }
            return resultado;
        }
    }
}

export default query;