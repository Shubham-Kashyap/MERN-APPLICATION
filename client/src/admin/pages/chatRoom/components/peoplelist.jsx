import React from 'react';
import { post_api_call } from '../../../../helpers/api_calls';

const PeopleList = () => {

    const [peopleList, setPeopleList] = React.useState();
    const [individualChats, setIndividualChats] = React.useState();
    const [groupChats, setGroupChats] = React.useState();
    const [currentTabData, setCurrentTabData] = React.useState({});
    const [showSearchList, setShowSearchListStatus] = React.useState(false);
    const [filteredList, setFilteredList] = React.useState([]);

    /**
     * --------------------------------------------------------------------------------------
     * Filter search
     * --------------------------------------------------------------------------------------
     */
    const filterSearch = (e) => {
        const keyword = e.target.value;
        setShowSearchListStatus(true);
        var updatedList = [...peopleList],
            groupChatsSearchResults = [...groupChats],
            individualChatSearchResults = [...individualChats];

        if (keyword !== '') {
            groupChatsSearchResults = peopleList.filter((user) => {
                return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                // Use the toLowerCase() method to make it case-insensitive and add results to group chats 
            });

            individualChatSearchResults = individualChats.filter((user) => {
                return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                // use the toLowerCase() method to mak eit case- nsensitive and add resutls to individual chats 
            });
            updatedList = updatedList.filter((user) => {
                return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;

            });
            setFilteredList(updatedList);
            setIndividualChats(...individualChats, individualChatSearchResults);
            setGroupChats(...groupChats, groupChatsSearchResults);
        }
        else {
            getPeopleList();
            // If the text field is empty, show all users
        }

    }

    /**
     * ------------------------------------------------------------------------------------------
     * add user to chat 
     * ------------------------------------------------------------------------------------------
     */
    async function addUserToChat(e) {
        try {
            const data = await post_api_call('/admin/v1/add-user-to-group', {
                userId: e.target.getAttribute('data-id')
            });
            console.log('add user to group response --', data.response);
        } catch (error) {
            console.log('add user to chat functionality errror -- ', error.message);
        }
    }

    /**
     * ------------------------------------------------------------------------------------------
     * get people list 
     * ------------------------------------------------------------------------------------------
     */
    const getPeopleList = async () => {
        const data = await post_api_call('/admin/v1/fetch-chat-users', {});
        data?.response?.map((item, index) => {
            if (item.is_group_chat === null || item.is_group_chat === false) {
                return setIndividualChats(...individualChats, item);
            } else {
                return setGroupChats(...groupChats, item);
            }
        });
        console.log('get people list --', data.response);
        setPeopleList(data.response);
    }
    const getPeopleList2 = async () => {
        const data = await post_api_call('/admin/v1/fetch-user-list', {});
        // console.log('++++ people list ++++++++ ', data);

        setPeopleList(data.response);
    }

    /**
     * -------------------------------------------------------------------------------------------
     * On tab change
     * -------------------------------------------------------------------------------------------
     */
    const onTabChange = (e) => {
        setCurrentTabData({
            tabDataId: e.targe.getAttribute('key'),
            tabDataAvatar: e.target.getAttribute('data-tab-avatar'),
            tabDataTimestamp: e.target.getAttribute('data-tab-timestamp')
        });
    }

    /**
     * ---------------------------------------------------------------------------------------------
     * Individual chat list
     * ---------------------------------------------------------------------------------------------
     */
    const _individualChatList = () => {
        if (showSearchList === true) {
            return (
                <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">

                </ul>
            )
        } else {
            console.log('-- individual chat list --', individualChats);
            const helo = [
                1, 23, 5, 6, 4, 9, 9, 7, 8
            ]
            return (
                <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">
                    People

                    {
                        helo?.map((item, index) => {

                            return (
                                <li className="clearfix" key={'ajhdhj'} data-id={'daads'} onClick={addUserToChat} style={{ cursor: 'pointer' }} onClick={onTabChange}>
                                    <img src={"https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                    <div className="about">
                                        <div className="name">{"no name adssa   "}</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                            )
                        })
                    }


                </ul>
            );
        }

    }
    /**
     * --------------------------------------------------------------------------------------
     * Group chat lists
     * --------------------------------------------------------------------------------------
     */
    const _groupChatList = (item) => {
        if (showSearchList === true) {
            return (
                <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">

                </ul>
            )
        } else {
            console.log('-- group chat list --', groupChats);
            const helo2 = [
                1, 23, 5, 6, 4, 9, 9, 7, 8
            ]
            return (
                <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">
                    Groups

                    {
                        helo2?.map((item, index) => {

                            return (
                                <li key={item._id} className="clearfix " data-tab-name={item.name} data-tab-timestamp={item.updatedAt} data-tab-avatar={item.avatar} style={{ cursor: 'pointer' }} onClick={onTabChange}>
                                    <img src={item.avatar ? item.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                    <div className="about">
                                        <div className="name">{item.name ? item.name : "no group name"}</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                            )
                        })
                    }


                </ul>
            )
        }

    }

    React.useEffect(() => {
        getPeopleList();
        getPeopleList2();
    });
    // React.useEffect(() => {
    //     _individualChatList();
    //     _groupChatList();
    // }, []);


    return (
        <>
            {/* people list start */}
            <div id="plist" className="people-list">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search..." onChange={filterSearch} />
                </div>


                {/* group / many-to-one chat list */}
                {_groupChatList()}
                {/* group / many-to-one chat list */}


                {/* Individual / one-to-one chat list */}
                {_individualChatList()}
                {/* Individual / one-to-one chat list */}
            </div>
            {/* people list end  */}
        </>
    );
}

export default PeopleList;
export const tabData = window.tabData;