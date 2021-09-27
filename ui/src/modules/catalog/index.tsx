import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import * as React from 'react'
import App from '../app'

const GET_CATALOG = gql`
    query GetCatalog {
        catalog {
            id
            name
        }
    }
`

export default function Catalog() {
    const { loading, error, data } = useQuery(GET_CATALOG)
    console.log(loading, error, data)
    return <App>Catalog</App>
}
