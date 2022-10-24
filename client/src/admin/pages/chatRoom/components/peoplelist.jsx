import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { post_api_call } from '../../../../helpers/api_calls';
import CreateGroup from '../../../components/modals/createGroup';

const PeopleList = () => {

    const [peopleList, setPeopleList] = React.useState();
    // const [currentTabData, setCurrentTabData] = React.useState({});
    // const [showSearchList, setShowSearchListStatus] = React.useState(false);
    const [filteredList, setFilteredList] = React.useState([]);
    const [enableMessaging, setEnableMessaging] = React.useState(false);
    const [individualList, setIndividualList] = React.useState([]);
    const [showFilteredlist, setShowFilteredList] = React.useState(false);
    const loggedInUserData = useSelector(state => state.loggedInUserData);
    const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch();
    /**
     * --------------------------------------------------------------------------------------
     * Filter search
     * --------------------------------------------------------------------------------------
     */
    const filterSearch = (e) => {
        const keyword = e.target.value;
        // setShowSearchListStatus(true);
        // var updatedList = [...peopleList]; // to apply the search on chat people list
        var updatedList = [...individualList] // to apply search filter on registered individuals

        if (keyword === "") {
            getPeopleList();
            setShowFilteredList(false);
        }
        if (keyword !== "") {
            setShowFilteredList(true);
            updatedList = updatedList.filter((user) => {
                return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            })
        }
        console.log('updated list --++ ', updatedList);
        setFilteredList(updatedList);
        // setPeopleList(updatedList);

    }
    async function setCurrentChat(item) {
        dispatch({
            type: "setCurrentChat",
            payload: item
        })
    }
    /**
     * ------------------------------------------------------------------------------------------
     * add user to chat 
     * ------------------------------------------------------------------------------------------
     */
    async function addUserToChat(e) {
        try {
            setEnableMessaging(true);
            const data = await post_api_call('/admin/v1/add-user-to-group', {
                userId: e.target.getAttribute('data-id')
            });
            console.log('add user to group response --', data.response);
        } catch (error) {
            console.log('add user to chat functionality errror -- ', error.message);
        }
    }

    /**`    
     * ------------------------------------------------------------------------------------------
     * get people list 
     * ------------------------------------------------------------------------------------------
     */
    const getPeopleList = async () => {
        // const users = await post_api_call('/admin/v1/fetch-user-list', {});
        const data = await post_api_call('/admin/v1/fetch-chat-users', {});
        setPeopleList(data.response);
        // setIndividualList(users.response);
        console.log('people list --', peopleList);
        // console.log('loggedInUserData -- ', loggedInUserData);
    }
    const getIndividualList = async () => {
        const users = await post_api_call('/admin/v1/fetch-user-list', {});
        setIndividualList(users.response);
    }
    /**
     * -------------------------------------------------------------------------------------------
     * On tab change
     * -------------------------------------------------------------------------------------------
     */
    // const onTabChange = (e) => {
    //     dispatch({
    //         type: "setMessaageBoxTabData",
    //         payload: 'hello123'
    //     })

    // }

    /**
     * ---------------------------------------------------------------------------------------------
     * Individual chat list
     * ---------------------------------------------------------------------------------------------
     */
    const _individualChatList = () => {
        return (
            <div>
                People

                {
                    peopleList?.map((item, index) => {
                        if (item.is_group_chat === 'false') {
                            return (
                                <li className="clearfix" key={item?._id} data-id={item?._id} style={{ cursor: 'pointer' }} onClick={(e) => setCurrentChat(item)}>
                                    <img src={item?.avatar ? item?.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                    <div className="about">
                                        <div className="name">{item.name ? item.name : "no individual name"}</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                            )
                        }

                    })
                }

            </div>
        );


    }
    /**
     * --------------------------------------------------------------------------------------
     * Group chat lists
     * --------------------------------------------------------------------------------------
     */
    const _groupChatList = (item) => {
        return (
            <div >
                Groups

                {
                    peopleList?.map((item, index) => {
                        if (item.is_group_chat === 'true') {
                            return (
                                <li key={item._id} className="clearfix " data-tab-name={item.name} data-tab-timestamp={item.updatedAt} data-tab-avatar={item.avatar} style={{ cursor: 'pointer' }} onClick={(e) => setCurrentChat(item)}>
                                    <img src={item.avatar ? item.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                    <div className="about">
                                        <div className="name">{item.name ? item.name : "no group name"}</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                            )
                        }

                    })
                }


            </div>
        )


    }
    const _filteredChatList = () => {
        if (showFilteredlist === false) {
            return null;
        }
        return (
            <div >
                {/* {filteredList.length > 1 ? "Search Results " : null} */}
                Search Results :
                {
                    filteredList?.map((item, index) => {

                        return (
                            <li key={item._id} className="clearfix " data-tab-name={item.name} data-tab-timestamp={item.updatedAt} data-tab-avatar={item.avatar} style={{ cursor: 'pointer' }} onClick={dispatch({ type: "setCurrentChat", payload: item })}>
                                <img src={item.avatar ? item.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                <div className="about">
                                    <div className="name">{item.name ? item.name : "no group name"}</div>
                                    <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                </div>
                            </li>
                        )


                    })
                }


            </div>
        );
    }

    React.useEffect(() => {
        getPeopleList();
        getIndividualList();
        // getPeopleList2();
    }, []);



    return (
        <>
            {/* people list start */}
            <div id="plist" className="people-list">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search..." onChange={filterSearch} />
                    <div className="input-group-prepend" style={{ cursor: "pointer" }} onClick={(e) => setShowModal(true)}>
                        <span className="input-group-text"><i className="fa fa-group"></i></span>
                    </div>
                    {
                        <CreateGroup show={showModal} individualData={individualList} onHide={(e) => setShowModal(false)} />
                    }
                </div>
                <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">
                    {/* group / many-to-one chat list */}
                    {_filteredChatList()}
                    {/* group / many-to-one chat list */}

                    {/* group / many-to-one chat list */}
                    {_groupChatList()}
                    {/* group / many-to-one chat list */}


                    {/* Individual / one-to-one chat list */}
                    {_individualChatList()}
                    {/* Individual / one-to-one chat list */}

                </ul>


            </div>
            {/* people list end  */}
        </>
    );
}

export default PeopleList;
export const tabData = window.tabData;