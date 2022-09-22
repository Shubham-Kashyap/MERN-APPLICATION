import React from 'react';
import { post_api_call } from '../../../../helpers/api_calls';

const PeopleList = () => {

    const [peopleList, setPeopleList] = React.useState();
    const [currentTabData, setCurrentTabData] = React.useState({});
    const [showSearchList, setShowSearchListStatus] = React.useState(false);
    const [filteredList, setFilteredList] = React.useState([]);
    const [enableMessaging, setEnableMessaging] = React.useState(false);

    /**
     * --------------------------------------------------------------------------------------
     * Filter search
     * --------------------------------------------------------------------------------------
     */
    const filterSearch = (e) => {
        const keyword = e.target.value;
        // setShowSearchListStatus(true);
        var updatedList = [...peopleList];

        if (keyword === "") {
            getPeopleList();
        }
        if (keyword !== "") {
            updatedList = updatedList.filter((user) => {
                return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            })
        }
        // setFilteredList(updatedlist);
        setPeopleList(updatedList);

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
        const users = await post_api_call('/admin/v1/fetch-user-list', {});
        const data = await post_api_call('/admin/v1/fetch-chat-users', {});
        setPeopleList(data.response);
        console.log('people list --', peopleList);
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
        return (
            <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">
                People

                {
                    peopleList?.map((item, index) => {
                        if (item.is_group_chat === 'false') {
                            return (
                                <li className="clearfix" key={item?._id} data-id={item?._id} onClick={addUserToChat} style={{ cursor: 'pointer' }} onClick={onTabChange}>
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

            </ul>
        );


    }
    /**
     * --------------------------------------------------------------------------------------
     * Group chat lists
     * --------------------------------------------------------------------------------------
     */
    const _groupChatList = (item) => {
        return (
            <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">
                Groups

                {
                    peopleList?.map((item, index) => {
                        if (item.is_group_chat === 'true') {
                            return (
                                <li key={item._id} className="clearfix " data-tab-name={item.name} data-tab-timestamp={item.updatedAt} data-tab-avatar={item.avatar} style={{ cursor: 'pointer' }} onClick={onTabChange}>
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


            </ul>
        )


    }

    React.useEffect(() => {
        getPeopleList();
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