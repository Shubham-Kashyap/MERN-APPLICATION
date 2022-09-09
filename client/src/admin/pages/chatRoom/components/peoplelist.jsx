import React from 'react';
import { post_api_call } from '../../../../helpers/api_calls'

const PeopleList = (props) => {

    const [peopleList, setPeopleList] = React.useState();
    const [peopleListFilter, setPeopleListFilter] = React.useState(peopleList);
    const [currentTabData, setCurrentTabData] = React.useState({});


    // filter search 
    const filterSearch = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = peopleList.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setPeopleListFilter(...peopleListFilter, results);
        }
        else {
            setPeopleListFilter(peopleList)

            // If the text field is empty, show all users
        }

    }
    const getPeopleList = async () => {
        const data = await post_api_call('/admin/v1/fetch-user-list', {});

        // if (data.response.length > 0) {
        //     setTab(data.response[0])
        // }
        setPeopleList(data.response);
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
                <li className="clearfix">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                    <div className="about">
                        <div className="name">Vincent Porter</div>
                        <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>
                    </div>
                </li>
                <li className="clearfix active">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                    <div className="about">
                        <div className="name">Aiden Chavez</div>
                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                    </div>
                </li>


                {/* {
                    peopleList && peopleList.map((item, index) => {

                        return (
                            <li key={item._id} className={item._id === tab._id ? "clearfix active " : "clearfix"} onClick={(e) => setTab(item) && io.emit('joined', loggedInUserData)}>
                                <img src={item.avatar ? item.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png"} alt="avatar" />
                                <div className="about">
                                    <div className="name">{item.name}</div>
                                    <div className="status"> <i className="fa fa-circle offline"></i> offline since Oct 28 </div>
                                </div>
                            </li>
                        )

                    })
                } */}

            </ul>
        );
    }
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


                {/* Individual / one-to-one chat list */}
                {_individualChatList()}
                {/* Individual / one-to-one chat list */}
            </div>
            {/* people list end  */}
        </>
    );
}

export default PeopleList;
