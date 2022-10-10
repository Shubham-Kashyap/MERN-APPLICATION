import { react, useState, useEffect } from 'react';
import { ApiCall } from '../../../helpers/api_calls';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Sidebar = () => {
	/**
	 * ----------------------------------------------------------------
	 * State variables 
	 * ----------------------------------------------------------------
	 */
	const navigate = useNavigate();
	const res = useSelector(state => state.authReducer.loggedInUser);
	const [userData, setUserData] = useState({
		username: "",
		name: ""
	});

	const [tab, setTab] = useState('');
	function logout(e) {
		e.preventDefault();
		localStorage.removeItem('authtoken', "")
		navigate('/login');
	}

	/**
	 * ----------------------------------------------------------------
	 * custom functions
	 * ----------------------------------------------------------------
	 */
	async function getLoggedInUser() {
		// const res = await ApiCall('/api/v1/fetch-profile');
		// setUserData({
		// 	name: res?.response?.name,
		// 	username: res?.response?.username,
		// 	image: ""
		// });

		setUserData(res);
	}
	/**
	 * ----------------------------------------------------------------
	 * Effect on load components
	 * ----------------------------------------------------------------
	 */
	useEffect(() => {
		// logout();
		getLoggedInUser();
		setTab(window.location.pathname);
	}, [
		res
	])
	return (
		<>
			<div id="sidebar" className="sidebar">

				<div data-scrollbar="true" data-height="100%">

					<ul className="nav">
						<li className="nav-profile">
							<a href="#" data-toggle="nav-profile">
								<div className="cover with-shadow"></div>
								<div className="image image-icon bg-black text-grey-darker">
									<i className="fa fa-user"></i>
								</div>
								<div className="info">
									<b className="caret pull-right"></b> {userData?.username}
									<small>Full stack developer</small>
								</div>
							</a>
						</li>
						<li>
							<ul className="nav nav-profile">
								<li onClick={() => setTab('/profile-settings')} className={tab === "/profile-settings" ? "active" : ""}>
									<a href="/profile-settings">
										<i className="fa fa-cog"></i> Settings</a>
								</li>
								{/* <li><a href="#"><i className="fa fa-pencil-alt"></i> Send Feedback</a></li> */}
								<li><a href="/logout"><i className="fa fa-question-circle"></i> Logout</a></li>
							</ul>
						</li>
					</ul>
					<ul className="nav"><li className="nav-header">Navigation</li>
						<li onClick={() => setTab('/dashboard')} className={tab === '/dashboard' ? "active" : ''}>
							<a href="/dashboard">
								<i className="ion-ios-pulse"></i>
								<span>Home</span>
							</a>
						</li>
						<li onClick={() => setTab('/all-users')} className={tab === '/all-users' ? "active" : ''}>
							<a href="/all-users">
								<i className="ion-ios-pulse"></i>
								<span>Users</span>
							</a>
						</li>
						{/* <li className="has-sub">
							<a href="#">
								<b className="caret"></b>
								<i className="ion-ios-list"></i>
								<span>Menu Level</span>
							</a>
							<ul className="sub-menu">
								<li className="has-sub">
									<a href="#">
										<b className="caret"></b>
										Menu 1.1
									</a>
									<ul className="sub-menu">
										<li className="has-sub">
											<a href="#">
												<b className="caret"></b>
												Menu 2.1
											</a>
											<ul className="sub-menu">
												<li><a href="#">Menu 3.1</a></li>
												<li><a href="#">Menu 3.2</a></li>
											</ul>
										</li>
										<li><a href="#">Menu 2.2</a></li>
										<li><a href="#">Menu 2.3</a></li>
									</ul>
								</li>
								<li><a href="#">Menu 1.2</a></li>
								<li><a href="#">Menu 1.3</a></li>
							</ul>
						</li> */}
						<li onClick={() => setTab('/profile-settings')} className={tab === '/profile-settings' ? "has-sub active" : 'has-sub'}>
							<a href="/profile-settings">
								{/* <b className="caret"></b> */}
								<i className="ion-ios-cog"></i>
								<span>Settings
									{/* <span className="label label-theme">NEW</span> */}
								</span>
							</a>
							{/* <ul className="sub-menu">
							</ul> */}
						</li>
						{/* <li><a href="/chat-section" className="sidebar-minify-btn" data-click="sidebar-minify"><i className="ion-ios-arrow-back"></i> <span>Chats</span></a></li> */}
						{/* <li><a href="/chat-section" className="sidebar-minify-btn"><i className="ion-ios-arrow-back"></i> <span>Chats</span></a></li> */}

					</ul>


				</div>

			</div>
			<div className="sidebar-bg"></div>
		</>
	);
}
export default Sidebar;
