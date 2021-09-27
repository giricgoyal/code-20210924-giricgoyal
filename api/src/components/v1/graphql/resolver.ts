import { getCatalog } from '../catalog/queries'
import { getDetails } from '../details/queries'

export const rootValue = {
    catalog: getCatalog,
    details: getDetails,
}
