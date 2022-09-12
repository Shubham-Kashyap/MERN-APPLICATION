import React from 'react';
import { post_api_call } from '../../../../helpers/api_calls';

const PeopleList = (props) => {

    const [peopleList, setPeopleList] = React.useState();
    const [individualChats, setIndividualChats] = React.useState();
    const [groupChats, setGroupChats] = React.useState();
    const [currentTabData, setCurrentTabData] = React.useState({});



    /**
     * --------------------------------------------------------------------------------------
     * Filter search
     * --------------------------------------------------------------------------------------
     */
    const filterSearch = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const groupChatsSearchResults = peopleList.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive and add results to group chats 
            });
            const individualChatSearchResults = individualChats.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // use the toLowerCase() method to mak eit case- nsensitive and add resutls to individual chats 
            });
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
     * get people list 
     * ------------------------------------------------------------------------------------------
     */
    const getPeopleList = async () => {
        const data = await post_api_call('/admin/v1/fetch-chat-users', {});

        // if (data.response.length > 0) {
        //     setTab(data.response[0])
        // }    
        data && data.map((item, index) => {
            if (item.is_group_chat === null || item.is_group_chat === false) {
                setIndividualChats(...individualChats, item);
            } else {
                setGroupChats(...groupChats, item);
            }
        });
        console.log('get people list --', data.response);
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
        return (
            <ul className="list-unstyled chat-list mt-2 mb-0" id="people-listing">
                People

                {
                    individualChats && individualChats.map((item, index) => {

                        return (
                            <li key={item._id} className="clearfix" data-tab-name={item.name} data-tab-timestamp={item.updatedAt} data-tab-avatar={item.avatar} style={{ cursor: 'pointer' }} onClick={onTabChange}>
                                <img src={item.avatar ? item.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                <div className="about">
                                    <div className="name">{item.name ? item.name : "no name"}</div>
                                    <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                </div>
                            </li>
                        )
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
                    groupChats && groupChats.map((item, index) => {

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

    React.useEffect(() => {
        getPeopleList();
        window.tabData = currentTabData;
    }, [])


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


                {/* group / one-to-one chat list */}
                {_groupChatList()}
                {/* group / one-to-one chat list */}


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