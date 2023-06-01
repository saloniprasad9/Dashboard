import { logout } from "../firebase";
import search from '../assets/Search icon(1).png';
import bell from '../assets/Vector(4).png';
import picture from '../assets/Mask Group.png';
import { Link } from "react-router-dom";
import './navigation.styles.css';
const Navigation = () => {
    return(
        <div className="navigation">
            <h3 className="dashboard-header">Dashboard</h3>
            <div className="search-bar">
                <input placeholder="Search..." className="search-box"></input>
                <img src={search} className="search-icon" alt="searchicon"></img>
            </div>
            <img src={bell} className="bell" alt="bell"></img>
            <img src={picture} className="picture" alt="profile"></img>
            <button onClick={logout} className="logout-button">
                LogOut
                <div>
                <Link to="/">LogOut</Link>
                </div>
            </button>
        </div>
    )
}

export default Navigation;