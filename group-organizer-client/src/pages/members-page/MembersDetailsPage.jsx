import './membersDetailsPage.css'
import { useParams } from 'react-router'

export const MembersDetailsPage = () => {
    const params = useParams();

    return <div className="members-details-page">
        <h3> details for member {params.id} </h3>
    </div>
}