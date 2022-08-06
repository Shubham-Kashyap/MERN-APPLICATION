 import React from "react";
 import { useState, useEffect } from 'react';
 import { ApiCall } from '../../helpers/api_calls';
 import { useNavigate, Outlet, Navigate } from "react-router-dom";

const Profile = () => {
    
    const navigate = useNavigate();
	const [userData, setUserData] = useState({
		username: "",
		name : ""
    });
    const [userDataChangedValues, setUserDataChangedValues] = useState(userData);
	
	
	async function getLoggedInUser() {
		const res = await ApiCall('/api/v1/fetch-profile');
		setUserData({
			name: res.response.name,
			username : res.response.username,
			image : ""
		});
		setUserDataChangedValues({
			name: res.response.name,
			username : res.response.username,
			image : ""
		});
		// console.log(res.response.name);
	}

    const onValueChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const attributeName = e.target.getAttribute('name');
        
        setUserDataChangedValues(attributeName ,{
            ...userDataChangedValues, attributeName: e.target.value
        })
        
    };
    const updateUserData = (e) => {
        e.preventDefault();
        setUserData(...userData , userDataChangedValues)
    }


    /**
     * ----------------------------------------------------------------
     * Effect onload component
     * ----------------------------------------------------------------
     */
	useEffect(() => {
		// logout();
		getLoggedInUser();

	}, [
		
	])
    return (
        <>
            
            <div id="content" className="content content-full-width">
                {/* <!--   begin profile --> */}
                <div className="profile">
                    <div className="profile-header">
                        {/* <!--   BEGIN profile-header-cover --> */}
                        <div className="profile-header-cover"></div>
                        {/* <!--   END profile-header-cover --> */}
                        {/* <!--   BEGIN profile-header-content --> */}
                        <div className="profile-header-content">
                            {/* <!--   BEGIN profile-header-img --> */}
                            <div className="profile-header-img">
                                <img src="/assets/img/user/user-13.jpg" alt="" />
                            </div>
                            {/* <!--   END profile-header-img --> */}
                            {/* <!--   BEGIN profile-header-info --> */}
                            <div className="profile-header-info">
                                <h4 className="mt-0 mb-1">{userData.username }</h4>
                                <p className="mb-2">Full stack Developer</p>
                                <a href="#" className="btn btn-xs btn-yellow">Edit Profile</a>
                            </div>
                            {/* <!--   END profile-header-info --> */}
                        </div>
                        {/* <!--   END profile-header-content --> */}
                        {/* <!--   BEGIN profile-header-tab --> */}
                        <ul className="profile-header-tab nav nav-tabs">

                            <li className="nav-item"><a href="#profile-about" className="nav-link active" data-toggle="tab">ABOUT</a></li>
                            <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">VIDEOS</a></li>
                            <li className="nav-item"><a href="#profile-friends" className="nav-link" data-toggle="tab">FRIENDS</a></li>
                        </ul>
                        {/* <!--   END profile-header-tab --> */}
                    </div>
                </div>
                {/* <!--   end profile --> */}


                {/* <!--   begin profile-content --> */}
                <div className="profile-content">
                    {/* <!--   begin tab-content --> */}
                    <div className="tab-content p-0">

                        {/* <!--   begin #profile-about tab --> */}
                        <div className="tab-pane fade show active" id="profile-about">
                            {/* <!--   begin table --> */}
                            <div className="table-responsive form-inline">
                                <table className="table table-profile">
                                    <thead>
                                        <tr>
                                            <th></th>
    <th>
                                                <h4> {userData.username} <small>{ userData.name }</small></h4>
                                               </th>
                                        </tr>
                                    </thead>
                                    <form></form>
                                    <tbody>
                                        <tr className="highlight">
                                            <td className="field">Username : </td>
                                            {/* <td><a href="#">Add Mood Message</a></td> */}
                                            <td>
                                                <div className="input">

                                                    <div className="input-group">
                                                        <input type="text" className="form-control rounded-corner" name="username" placeholder="Enter username..." value={userDataChangedValues.username} onChange={ onValueChange } />
                                                        
                                                    </div>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="divider">
                                            <td colSpan="2"></td>
                                        </tr>
                                        <tr>
                                            <td className="field">Name : </td>
                                            <td>
                                                <div className="input">

                                                    <div className="input-group">
                                                        <input type="text" className="form-control rounded-corner" name="name" placeholder="Enter name..." value={userDataChangedValues.name} onChange={ onValueChange }  />
                                                        
                                                    </div>

                                                </div>
                                            </td>
                                        </tr>
                                       
                                        <tr className="divider">
                                            <td colSpan="2"></td>
                                        </tr>
                                        {/* <tr>
                                            <td className="field valign-middle">Country/Region</td>
                                            <td className="with-form-control">
                                                <select defaultValue={'1'} className="form-control form-control-sm" name="region">
                                                    <option value="1" disabled>Choose a salutation ...</option>
                                                    <option value="US" selected>United State</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua and Barbuda</option>
                                                </select>
                                            </td>
                                        </tr> */}
                                        
                                        {/* <tr>
                                            <td className="field valign-middle">Gender</td>
                                            <td className="with-form-control">
                                                <select defaultValue={'1'} className="form-control form-control-sm" name="gender">
                                                    <option value="1" disabled>Choose a salutation ...</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </td>
                                        </tr> */}
                                       
                                        {/* <tr>
                                            <td className="field valign-middle">Language</td>
                                            <td className="with-form-control">
                                                <select defaultValue={'1'} className="form-control form-control-sm" name="language">
                                                    <option value="1" disabled>Choose a salutation ...</option>
                                                    <option value="" selected>English</option>
                                                </select>
                                            </td>
                                        </tr> */}
                                        <tr className="divider">
                                            <td colSpan="2"></td>
                                        </tr>
                                        <tr className="highlight">
                                            <td className="field">&nbsp;</td>
                                            <td className="p-t-10 p-b-10">
                                                <button type="submit" className="btn btn-primary width-150">Update</button>
                                                <button type="submit" className="btn btn-white btn-white-without-border width-150 m-l-5">Cancel</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <!--   end table --> */}
                        </div>
                        {/* <!--   end #profile-about tab --> */}

                        {/* <!--   begin #profile-videos tab --> */}
                        <div className="tab-pane fade" id="profile-videos">
                            <h4 className="m-t-0 m-b-20">Videos (16)</h4>
                            {/*  <!--   begin row -->  */}
                            <div className="row row-space-2">
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=RQ5ljyGg-ig" data-lity>
                                        <img src="https://img.youtube.com/vi/RQ5ljyGg-ig/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=5lWkZ-JaEOc" data-lity>
                                        <img src="https://img.youtube.com/vi/5lWkZ-JaEOc/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=9ZfN87gSjvI" data-lity>
                                        <img src="https://img.youtube.com/vi/9ZfN87gSjvI/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=w2H07DRv2_M" data-lity>
                                        <img src="https://img.youtube.com/vi/w2H07DRv2_M/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=PntG8KEVjR8" data-lity>
                                        <img src="https://img.youtube.com/vi/PntG8KEVjR8/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=q8kxKvSQ7MI" data-lity>
                                        <img src="https://img.youtube.com/vi/q8kxKvSQ7MI/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=cutu3Bw4ep4" data-lity>
                                        <img src="https://img.youtube.com/vi/cutu3Bw4ep4/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=gCspUXGrraM" data-lity>
                                        <img src="https://img.youtube.com/vi/gCspUXGrraM/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=COtpTM1MpAA" data-lity>
                                        <img src="https://img.youtube.com/vi/COtpTM1MpAA/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=8NVkGHVOazc" data-lity>
                                        <img src="https://img.youtube.com/vi/8NVkGHVOazc/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=QgQ7MWLsw1w" data-lity>
                                        <img src="https://img.youtube.com/vi/QgQ7MWLsw1w/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=Dmw0ucCv8aQ" data-lity>
                                        <img src="https://img.youtube.com/vi/Dmw0ucCv8aQ/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=r1d7ST2TG2U" data-lity>
                                        <img src="https://img.youtube.com/vi/r1d7ST2TG2U/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=WUR-XWBcHvs" data-lity>
                                        <img src="https://img.youtube.com/vi/WUR-XWBcHvs/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=A7sQ8RWj0Cw" data-lity>
                                        <img src="https://img.youtube.com/vi/A7sQ8RWj0Cw/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                                {/*  <!--   begin col-3 -->  */}
                                <div className="col-md-3 col-sm-4 m-b-2">
                                    <a href="https://www.youtube.com/watch?v=IMN2VfiXls4" data-lity>
                                        <img src="https://img.youtube.com/vi/IMN2VfiXls4/mqdefault.jpg" className="width-full" />
                                    </a>
                                </div>
                                {/*  <!--   end col-3 -->  */}
                            </div>
                            {/*  <!--   end row -->  */}
                        </div>
                        {/*  <!--   end #profile-videos tab -->  */}

                        {/*  <!--   begin #profile-friends tab -->  */}
                        <div className="tab-pane fade" id="profile-friends">
                            <h4 className="m-t-0 m-b-20">Friend List (14)</h4>
                            {/*  <!--   begin row -->  */}
                            <div className="row row-space-6">
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-1.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">James Pittman</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-2.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Mitchell Ashcroft</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-3.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Ella Cabena</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-4.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Declan Dyson</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-5.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">George Seyler</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-6.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Patrick Musgrove</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-7.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Taj Connal</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-8.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Laura Pollock</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-9.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Dakota Mannix</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-10.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Timothy Woolley</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-11.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Benjamin Congreve</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-12.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Mariam Maddock</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-13.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Blake Gerrald</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                                {/*  <!--   begin col-6 -->  */}
                                <div className="col-xl-4 col-lg-6 m-b-5 p-b-1">
                                    <div className="p-10 bg-white rounded">
                                        <div className="media media-xs overflow-visible align-items-center">
                                            <a className="media-left" href="#">
                                                <img src="/assets/img/user/user-14.jpg" alt="" className="media-object img-circle" />
                                            </a>
                                            <div className="media-body valign-middle">
                                                <b className="text-inverse">Gabrielle Bunton</b>
                                            </div>
                                            <div className="media-body valign-middle text-right overflow-visible">
                                                <div className="btn-group btn-group-sm dropdown">
                                                    <a href="#" className="btn btn-default">Friends</a>
                                                    <a href="#" data-toggle="dropdown" className="btn btn-default dropdown-toggle"><b className="caret"></b></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Action 1</a>
                                                        <a href="#" className="dropdown-item">Action 2</a>
                                                        <a href="#" className="dropdown-item">Action 3</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Action 4</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  <!--   end col-6 -->  */}
                            </div>
                            {/*  <!--   end row -->  */}
                        </div>
                        {/*  <!--   end #profile-friends tab -->  */}
                    </div>
                    {/*  <!--   end tab-content -->  */}
                </div>
                {/*  <!--   end profile-content -->  */}
            </div>
            {/*  <!--   end #content -->  */}








        </>
    );
}

export default Profile;

// const profile = () => {
    // const [userData, setUserData] = useState({
    //     name: '',
    //     name: '',
    //     mobile: '',
    //     email : ''
    // });

    // useEffect(() => {

    // }, []);