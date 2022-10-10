const OtherIcons = () => {
    return (
        <div className="col-lg-6 hidden-sm text-right">
            <a href="#" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
            <a href="#" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
            <a href="#" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
            <a href="#" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
        </div>
    );
}


const _showContent = (tab) => {
    const avatar = tab && tab?.avatar ? tab?.avatar : "https://bootdey.com/img/Content/avatar/avatar2.png";
    const name = tab && tab?.name ? tab?.name : 'Random user';
    const lastSeen = tab && tab?.lastSeen ? tab?.lastSeen : "Last seen: 2 hours ago";
    return (
        <div className="chat-header clearfix bg-gradient-teal">
            <div className="row " >
                <div className="col-lg-6">
                    <a href="#" data-toggle="modal" data-target="#view_info">
                        <img src={avatar} alt="avatar" />
                    </a>
                    <div className="chat-about">
                        <h6 className="m-b-0">{name}</h6>
                        <small>{lastSeen}</small>
                    </div>
                </div>

            </div>
        </div>
    );
}
const _hideContent = () => {
    return (
        <div className="none">

        </div>
    );
}

const ChatHeader = ({ tab }) => {

    return (
        <>
            {tab ? _showContent(tab) : _hideContent()}
        </>

    );
}
export default ChatHeader;