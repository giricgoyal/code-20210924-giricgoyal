import { buildSchema } from 'graphql'

export default buildSchema(`
    type Query {
        catalog: [Product]
        details(id: ID!): Product
    }

    type Product {
        id: ID,
        name: String
    }
`)
