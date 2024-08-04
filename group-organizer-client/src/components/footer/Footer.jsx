import { useGroupOrganizer } from '../../contexts/GroupOrganizerContext'
import './footer.css'

export const Footer = () => {
    const { isFontSizeLarge, setFontSize } = useGroupOrganizer();

    return <div className={isFontSizeLarge ? 'footer large' : 'footer small'}>
        <p> Footer </p>
        <button type='button' onClick={setFontSize}> set font size </button>
    </div>
}