import gql from 'graphql-tag';

export const REGISTER_MUTATION = gql`
    mutation register( $input: UserRegisterInputType!) {
      register(input: $input){
        message
        hashToken
    }
  }
`;

export const LOGIN_QUERY = gql`
    query login( $input: UserLoginInputType!) {
      login(input: $input){
        token
        user {
          email
        }
    }
  }
`;

export default {
  REGISTER_MUTATION,
  LOGIN_QUERY,
};
