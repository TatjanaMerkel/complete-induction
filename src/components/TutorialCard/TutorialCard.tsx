import { ReactChild, ReactFragment, ReactPortal } from 'react';
import './TutorialCard.css';

function TutorialCard(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {

    return (
        <div className="card">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default TutorialCard;
