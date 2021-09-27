import { graphqlController } from './components/v1/graphql/controller'
export const initRoutes = (app) => {
    app.use('/api/v1/graphql', graphqlController)
}
