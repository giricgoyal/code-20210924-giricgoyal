import * as React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as naviagtionActions from '../../models/navigation/actions'
import * as actions from './actions'
import * as navigationSelectors from '../../models/navigation/selectors'
import Link from '../../components/link'

function Topbar() {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.activate())
        return () => {
            dispatch(actions.deactivate())
        }
    })
    const currentPage = useSelector(navigationSelectors.getCurrentPage)

    const onNavigate = (path) => {
        dispatch(naviagtionActions.setPage(path))
        history.push(path)
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <ul>
                        <li>
                            <Link isActive={currentPage === '/'} onClick={() => onNavigate('/')}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link isActive={currentPage === '/page1'} onClick={() => onNavigate('/page1')}>
                                Page 1
                            </Link>
                        </li>
                        <li>
                            <Link isActive={currentPage === '/page2'} onClick={() => onNavigate('/page2')}>
                                Page 2
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Topbar
