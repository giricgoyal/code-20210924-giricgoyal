import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
import { rootValue } from './resolver'

export const graphqlController = graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
})
