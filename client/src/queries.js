import gql from 'graphql-tag';


const REGISTER_USER = gql`
  mutation AddUser($email: String!, $username: String!, $password: String!) {
    addUser(userInput: {
      email: $email,
      username: $username,
      password: $password
    }){
      id, email, username
    }
  }
`;

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const ADD_PRODUCT = gql`
  mutation AddProduct($name:String!, $description:String!, $price:Float!, $quantity:Int!, $image:String! ) {
    addProduct(name: $name, description: $description, price: $price, quantity: $quantity, image: $image) {
      id
      name
      description
      price
      quantity
      image
    }
  }
`;

const GET_PRODUCTS = gql`
  query ProductsQuery {
    products {
      id
      name
      description
      price
      quantity
      image
    }
  }  
`;

const GET_PRODUCT_DETEAILS = gql`
  query ProductQuery($id: Int!) {
    product(id: $id) {
      id
      name
      description
      price
      quantity
    }
  }
`;

export { REGISTER_USER, LOGIN_USER, ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT_DETEAILS };


