import './TutorialCard.css';

function TutorialCard(props: { page: number, title: string, text_1: string, text_2: string }) {






    return (
        <div className="card">
            <h2 className="card-title">
                {props.title}
            </h2>
            <div className="card-body" dangerouslySetInnerHTML={{ __html: props.text_1}} />
            {props.page !== 1 ? <img className="domino-image" src={require('../../../assets/DominoEffect.jpg')} alt="DominoEffekt"/>:''}
            <div className="card-body" dangerouslySetInnerHTML={{ __html: props.text_2}} />
        </div>

    );
}

export default TutorialCard;
