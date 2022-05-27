import './Navbar.css';


function Navbar() {

    return (
        <div className="flex-container">
            <img src={require('../../assets/dominoes.png')} alt="logo"/>
            <div className="title">
                Vollständige Induktion
            </div>

        </div>
    );
}

export default Navbar;
