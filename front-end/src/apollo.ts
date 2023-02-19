import { ApolloClient,createHttpLink,InMemoryCache } from "@apollo/client/core";
const getHeaders = () => {
    var headers = {};
    const token = window.localStorage.getItem("Apollotoken");
    if(token){
      headers = {Authorization:`Bearer ${token}`};
    }
    return headers;
  };
const httpLink = createHttpLink({
    uri:'https://sunny-glowworm-92.hasura.app/v1/graphql',
    fetch,
    headers:{ Authorization:`Bearer ${window.localStorage.getItem("Apollotoken")}`}
    //getHeaders()
})
const apolloclient = new ApolloClient({
    link:httpLink,
    cache:new InMemoryCache()
})
export default apolloclient