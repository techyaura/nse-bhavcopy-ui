import gql from 'graphql-tag';

export const TODO_ADD_MUTATION = gql`
    mutation addTodo( $input: TodoInputType!) {
        addTodo(input: $input){
            message
            ok
        }
    }
`;

export const TODO_UPDATE_MUTATION = gql`
    mutation updateTodo( $id: ID!, $input: TodoInputType!) {
        updateTodo(id: $id, input: $input){
            message
            ok
        }
    }
`;

export const TODO_DELETE_MUTATION = gql`
    mutation deleteTodo( $id: ID!) {
        deleteTodo(id: $id){
            message
            ok
        }
    }
`;


export const TODO_LIST_QUERY = gql`
    query todoList ($first: Int = 50, $offset: Int = 1){
        todoList (first: $first, offset: $offset ){
            totalCount
            data {
                _id
                title
                isCompleted
                createdAt
                comments {
                    description
                }
                user {
                    email
                }
            }
        }
    }
`;

export default {
  TODO_ADD_MUTATION,
  TODO_DELETE_MUTATION,
  TODO_UPDATE_MUTATION,
  TODO_LIST_QUERY,
};
