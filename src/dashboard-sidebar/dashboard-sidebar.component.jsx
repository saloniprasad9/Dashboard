import dashboardicon from '../assets/dashboard_icon.png'; 
import transactionsicon from '../assets/transaction_icon.png';
import schedulesicon from '../assets/schedule_icon.png';
import usersicon from '../assets/user_icon.png';
import settingsicon from '../assets/setting_icon.png';
import './dashboard-sidebar.styles.css';
const SideBar = () => {
    return(
        <div className="sidebar-container">
            <div className='sidebar'>
                <h1 className='board1'>Board.</h1>
                <div className='icons-container'>
                    <div>
                        <img src={dashboardicon} className='dashboardicon'></img>
                        <div className='dashboard1'>
                            Dashboard
                        </div>
                    </div>
                    <div>
                        <img src={transactionsicon} className='transactionsicon'></img>
                        <div className='transactions'>
                            Transactions
                        </div>
                    </div>
                    <div>
                        <img src={schedulesicon} className='schedulesicon'></img>
                        <div className='schedules'>
                            Schedules
                        </div>
                    </div>
                    <div>
                        <img src={usersicon} className='usersicon'></img>
                        <div className='users'>
                            Users
                        </div>
                    </div>
                    <div>
                        <img src={settingsicon} className='settingsicon'></img>
                        <div className='settings'>
                            Settings
                        </div>
                    </div>
                </div>
                <h5 className='help'>Help</h5>
                <h5 className='contact'>Contact Us</h5>
            </div>
        </div>
    )
}

export default SideBar;