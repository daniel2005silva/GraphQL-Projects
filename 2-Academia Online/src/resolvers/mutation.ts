import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { database } from '../data/data.store';

const mutation : IResolvers = {
    Mutation: {
        cursoNovo(__: void, { curso }): any {
            const itemCurso = {
                id: String(database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }
            if(database.cursos.filter(itemCurs => itemCurs.title === itemCurso.title).length === 0){
                database.cursos.push(itemCurso);
                return itemCurso;
            }
            return {
                id: '-1',
                title: 'Já existe um curso com este título!',
                description: '',
                clases: 0,
                time: 0.0,
                level: 'TODOS',
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            }
        },
        modificarCurso(__: void, { curso }): any {
            const elementoExiste = _.findIndex(database.cursos, function(o){
                return o.id === curso.id;
            });
            if(elementoExiste > -1){
                const valores = database.cursos[elementoExiste].reviews;
                curso.reviews = valores;
                database.cursos[elementoExiste] = curso;
                return curso;
            }

            return {
                id: '-1',
                title: 'O curso não existe na base de dados!',
                description: '',
                clases: 0,
                time: 0.0,
                level: 'TODOS',
                logo: '',
                path: '',
                teacher: '',
                reviews: []
            }
        },
        eliminarCurso(__: void, { id }): any {
            const apagarCurso = _.remove(database.cursos, function(curso) {
                return curso.id === id;
            });

            if(apagarCurso[0] === undefined){
                return {
                    id: '-1',
                    title: 'Não é possível excluir o curso porque o mesmo não foi encontrado.',
                    description: '',
                    clases: 0,
                    time: 0.0,
                    level: 'TODOS',
                    logo: '',
                    path: '',
                    teacher: '',
                    reviews: []
                };
            }
            return apagarCurso[0];
        }
    }
}

export default mutation;