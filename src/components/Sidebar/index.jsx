import "./style.scss"
import { Link } from "react-router-dom";
const Sidebar = () => {
    return ( 
        <div className="sidebar-container">
            <span>Logo here</span>
            <div className="elements">
                <button>
                    <Link to="/nouvelleFacture" className="link">Nouvelle Facture</Link>
                </button>
                <button>
                    <Link className="link">Mes Factures</Link>
                </button>
            </div>
        </div>
     );
}
 
export default Sidebar;
<div></div>