const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({

}))

app.listen(4000,()=>{
    console.log('Server run in port 400');
})