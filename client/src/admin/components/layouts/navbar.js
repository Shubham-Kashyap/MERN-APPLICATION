
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ApiCall } from '../../../helpers/api_calls';

const Navbar = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		username: "",
		name: ""
	});
	function logout(e) {
		e.preventDefault();
		localStorage.removeItem('authtoken', "")
		navigate('/login');
	}

	async function getLoggedInUser() {
		const res = await ApiCall('/api/v1/fetch-profile');
		setUserData({
			name: res.response.name,
			username: res.response.username,
			image: ""
		});
		// console.log(res.response.name);
	}

	useEffect(() => {
		// logout();
		getLoggedInUser();

	}, [

	])
	return (
		<>
			<div id="header" className="header navbar-default">
				<div className="navbar-header">
					<a href="index.html" className="navbar-brand"><span className="navbar-logo"><i className="ion-ios-cloud"></i></span> <b className="mr-1">React </b>Chat Application</a>
					<button type="button" className="navbar-toggle" data-click="sidebar-toggled">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				</div>

				<ul className="navbar-nav navbar-right">
					{/* <li className="navbar-form">
						<form action="" method="POST" name="search_form">
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Enter keyword" />
								<button type="submit" className="btn btn-search"><i className="ion-ios-search"></i></button>
							</div>
						</form>
					</li> */}
					{/* <li className="dropdown">
						<a href="/" data-toggle="dropdown" className="dropdown-toggle icon">
							<i className="ion-ios-notifications"></i>
							<span className="label">0</span>
						</a>
						<div className="dropdown-menu media-list dropdown-menu-right">
							<div className="dropdown-header">NOTIFICATIONS (0)</div>
							<div className="text-center width-300 p-b-10 p-t-10">
								No notification found
							</div>
						</div>
					</li> */}
					<li className="dropdown navbar-user">
						<a href="/" className="dropdown-toggle" data-toggle="dropdown">
							<div className="image image-icon bg-black text-grey-darker">
								<i className="fa fa-user"></i>
							</div>
							<span className="d-none d-md-inline">{userData.username} </span> <b className="caret"></b>
						</a>
						<div className="dropdown-menu dropdown-menu-right">
							{/* <a href="#" className="dropdown-item">Edit Profile</a>
						<a href="#" className="dropdown-item"><span className="badge badge-danger pull-right">0</span> Inbox</a>
						<a href="#" className="dropdown-item">Calendar</a> */}
							<a href='/profile-settings' className="dropdown-item">Profile Setting</a>
							<div className="dropdown-divider"></div>
							<a href="#" onClick={(e) => logout(e)} className="dropdown-item">Log Out</a>
						</div>
					</li>
				</ul>

			</div>
		</>
	);
}

export default Navbar;
