import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
const getHeaders = () => {
  const token = window.localStorage.getItem("Apollotoken");
  if (token) {
    return `Bearer ${token}`;
  }
  return ''
};
const httpLink = createHttpLink({
  uri: 'http://localhost:8080/v1/graphql',
  headers:''
    // {
    //   Authorization:''
    // }
})
const apolloclient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
export default apolloclient;