import { useGroupOrganizer } from '../../contexts/GroupOrganizerContext'
import './navBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    const { isUpperCase, setUpperCase } = useGroupOrganizer();

    return <div className={isUpperCase ? 'nav-bar capital' : 'nav-bar lower-case'}>
        <ul className='nav-list'>
            <li>
                <Link onMouseOver={setUpperCase} className='nav-list-item' to='/'> Home </Link>
            </li>
            <li>
                <Link onMouseOver={setUpperCase} className='nav-list-item' to='/members'> Members </Link>
            </li>
        </ul>
    </div>
}