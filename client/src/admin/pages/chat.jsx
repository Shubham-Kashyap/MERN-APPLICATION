import { React } from 'react';


const Chat = () => {
    return (
        <>
            <div id="content" className="content content-full-width">
                {/* <!-- begin vertical-box --> */}
                <div className="vertical-box with-grid inbox bg-silver">
                    {/* <!-- begin vertical-box-column --> */}
                    <div className="vertical-box-column width-200">
                        {/* <!-- begin vertical-box --> */}
                        <div className="vertical-box">
                            {/* <!-- begin wrapper --> */}
                            <div className="wrapper">
                                <div className="d-flex align-items-center justify-content-center">
                                    <a href="#emailNav" data-toggle="collapse" className="btn btn-inverse btn-sm mr-auto d-block d-lg-none">
                                        <i className="fa fa-cog"></i>
                                    </a>
                                    {/* <a href="email_compose.html" className="btn btn-inverse p-l-40 p-r-40 btn-sm">
                                        Compose
                                    </a> */}
                                </div>
                            </div>
                            {/* <!-- end wrapper --> */}
                            {/* <!-- begin vertical-box-row --> */}
                            <div className="vertical-box-row collapse d-lg-table-row" id="emailNav">
                                {/* <!-- begin vertical-box-cell --> */}
                                <div className="vertical-box-cell">
                                    {/* <!-- begin vertical-box-inner-cell --> */}
                                    <div className="vertical-box-inner-cell">
                                        {/* <!-- begin scrollbar --> */}
                                        <div className="slimScrollDiv"
                                            // style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: "100%" }}
                                        ><div data-scrollbar="true" data-height="100%" data-init="true"
                                            // style={{ overflow: 'hidden', width: 'auto', height: '100%' }}
                                            >
                                            {/* <!-- begin wrapper --> */}
                                            <div className="wrapper p-0">
                                                <div className="nav-title"><b>FOLDERS</b></div>
                                                <ul className="nav nav-inbox">
                                                    <li className="active"><a href="email_inbox.html"><i className="fa fa-inbox fa-fw m-r-5"></i> Inbox <span className="badge pull-right">52</span></a></li>
                                                    <li><a href="email_inbox.html"><i className="fa fa-flag fa-fw m-r-5"></i> Important</a></li>
                                                    <li><a href="email_inbox.html"><i className="fa fa-envelope fa-fw m-r-5"></i> Sent</a></li>
                                                    <li><a href="email_inbox.html"><i className="fa fa-pencil-alt fa-fw m-r-5"></i> Drafts</a></li>
                                                    <li><a href="email_inbox.html"><i className="fa fa-trash fa-fw m-r-5"></i> Trash</a></li>
                                                </ul>
                                                <div className="nav-title"><b>LABEL</b></div>
                                                <ul className="nav nav-inbox">
                                                    <li><a href="#"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-inverse"></i> Admin</a></li>
                                                    <li><a href="#"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-blue"></i> Designer &amp; Employer</a></li>
                                                    <li><a href="#"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-success"></i> Staff</a></li>
                                                    <li><a href="#"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-warning"></i> Sponsorer</a></li>
                                                    <li><a href="#"><i className="fa fa-fw f-s-10 m-r-5 fa-circle text-danger"></i> Client</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- end wrapper --> */}
                                            </div><div className="slimScrollBar"
                                                // style={{ background: 'rgb(0, 0, 0)', width: '7px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: "1px", height: "214.906px" }}
                                            ></div><div className="slimScrollRail"
                                                // style={{ width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '1px' }}
                                            ></div></div>
                                        {/* <!-- end scrollbar --> */}
                                    </div>
                                    {/* <!-- end vertical-box-inner-cell --> */}
                                </div>
                                {/* <!-- end vertical-box-cell --> */}
                            </div>
                            {/* <!-- end vertical-box-row --> */}
                        </div>
                        {/* <!-- end vertical-box --> */}
                    </div>
                    {/* <!-- end vertical-box-column --> */}
                    {/* <!-- begin vertical-box-column --> */}
                    <div className="vertical-box-column">
                        {/* <!-- begin vertical-box --> */}
                        <div className="vertical-box">
                            {/* <!-- begin wrapper --> */}
                            <div className="wrapper">
                                {/* <!-- begin btn-toolbar --> */}
                                <div className="btn-toolbar align-items-center">
                                    <div className="custom-control custom-checkbox mr-2">
                                        <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailSelectAll" data-change="email-select-all"/>
                                            <label className="custom-control-label" htmlFor="emailSelectAll"></label>
                                    </div>
                                    <div className="dropdown mr-2">
                                        <button className="btn btn-white btn-sm" data-toggle="dropdown">
                                            View All <span className="caret m-l-3"></span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item"><i className="fa fa-circle f-s-9 fa-fw mr-2"></i> All</a>
                                            <a href="#" className="dropdown-item"><i className="fa fa-circle f-s-9 fa-fw mr-2 text-muted"></i> Unread</a>
                                            <a href="#" className="dropdown-item"><i className="fa fa-circle f-s-9 fa-fw mr-2 text-blue"></i> Contacts</a>
                                            <a href="#" className="dropdown-item"><i className="fa fa-circle f-s-9 fa-fw mr-2 text-success"></i> Groups</a>
                                            <a href="#" className="dropdown-item"><i className="fa fa-circle f-s-9 fa-fw mr-2 text-warning"></i> Newsletters</a>
                                            <a href="#" className="dropdown-item"><i className="fa fa-circle f-s-9 fa-fw mr-2 text-danger"></i> Social updates</a>
                                            <a href="#" className="dropdown-item"><i className="fa fa-circle f-s-9 fa-fw mr-2 text-indigo"></i> Everything else</a>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-white mr-2"><i className="fa fa-redo"></i></button>
                                    {/* <!-- begin btn-group --> */}
                                    <div className="btn-group">
                                        <button className="btn btn-sm btn-white hide" data-email-action="delete"><i className="fa fa-times mr-2"></i> <span className="hidden-xs">Delete</span></button>
                                        <button className="btn btn-sm btn-white hide" data-email-action="archive"><i className="fa fa-folder mr-2"></i> <span className="hidden-xs">Archive</span></button>
                                        <button className="btn btn-sm btn-white hide" data-email-action="archive"><i className="fa fa-trash mr-2"></i> <span className="hidden-xs">Junk</span></button>
                                    </div>
                                    {/* <!-- end btn-group --> */}
                                    {/* <!-- begin btn-group --> */}
                                    <div className="btn-group ml-auto">
                                        <button className="btn btn-white btn-sm">
                                            <i className="fa fa-chevron-left"></i>
                                        </button>
                                        <button className="btn btn-white btn-sm">
                                            <i className="fa fa-chevron-right"></i>
                                        </button>
                                    </div>
                                    {/* <!-- end btn-group --> */}
                                </div>
                                {/* <!-- end btn-toolbar --> */}
                            </div>
                            {/* <!-- end wrapper --> */}
                            {/* <!-- begin vertical-box-row --> */}
                            <div className="vertical-box-row">
                                {/* <!-- begin vertical-box-cell --> */}
                                <div className="vertical-box-cell">
                                    {/* <!-- begin vertical-box-inner-cell --> */}
                                    <div className="vertical-box-inner-cell bg-white">
                                        {/* <!-- begin scrollbar --> */}
                                        <div className="slimScrollDiv"
                                            // style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '100%' }}
                                        ><div data-scrollbar="true" data-height="100%" data-init="true"
                                                // style={{ overflow: 'hidden', width: 'auto', height: '100%' }}
                                            >
                                            {/* <!-- begin list-email --> */}
                                            <ul className="list-group list-group-lg no-radius list-email">
                                                <li className="list-group-item unread">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox1"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox1"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-blue">
                                                        <span className="text-white">F</span>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Facebook Blueprint</span>
                                                            <span className="email-title">Newly released courses, holiday marketing tips, how-to video, and more!</span>
                                                            <span className="email-desc">Sed scelerisque dui lacus, quis pellentesque lorem tincidunt rhoncus. Nulla accumsan elit pharetra, lacinia turpis nec, varius erat.</span>
                                                            <span className="email-time">Today</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item unread">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox2"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox2"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-indigo">
                                                        <span className="text-white">C</span>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Color Admin</span>
                                                            <span className="email-title">Color Admin dashboard v2 is ready htmlFor live</span>
                                                            <span className="email-desc">Proin interdum aliquam urna, quis lobortis magna tincidunt ac. Integer sed pulvinar neque...</span>
                                                            <span className="email-time">Today</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item unread">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox3"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox3"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-grey">
                                                        <span className="text-white">W</span>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">support@wrapbootstrap.com</span>
                                                            <span className="email-title">Bootstrap v4.0 is coming soon</span>
                                                            <span className="email-desc">Praesent id pulvinar orci. Donec ac metus non ligula faucibus venenatis. Suspendisse tortor est, placerat eu dui sed...</span>
                                                            <span className="email-time">Today</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox4"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox4"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-grey">
                                                        <i className="fab fa-github-alt text-white"></i>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Github</span>
                                                            <span className="email-title">Sidebar animation bugfix</span>
                                                            <span className="email-desc">Nam sit amet lacinia massa, sit amet blandit urna. Duis pharetra ex id ipsum posuere...</span>
                                                            <span className="email-time">2 days ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox5"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox5"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-grey">
                                                        <span className="text-white">W</span>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Wrapbootstrap</span>
                                                            <span className="email-title">Bootstrap Framework is awesome</span>
                                                            <span className="email-desc">Etiam enim ipsum, malesuada in consectetur interdum, malesuada et lacus. Aenean faucibus turpis lorem...</span>
                                                            <span className="email-time">1 week ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox6"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox6"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user">
                                                        <img src={"../assets/img/user/user-12.jpg"} alt="" />
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Gerald Huff</span>
                                                            <span className="email-title">Handlebars help you to build semantic template </span>
                                                            <span className="email-desc">Proin consectetur accumsan rhoncus. Nulla porta orci ultricies lectus consequat fringilla. Vestibulum ante ipsum primis in faucibus...</span>
                                                            <span className="email-time">2 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox7"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox7"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user">
                                                        <img src="../assets/img/user/user-1.jpg" alt="" />
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Rick	Hopkins</span>
                                                            <span className="email-title">jQuery 2++ no longer compatibility with the old browser</span>
                                                            <span className="email-desc">Suspendisse ut urna orci. Vivamus ac diam sollicitudin, consequat mauris id, facilisis ipsum. Nam feugiat nisl a justo...</span>
                                                            <span className="email-time">2 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox8"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox8"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user">
                                                        <img src="../assets/img/user/user-13.jpg" alt="" />
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Jan Scott</span>
                                                            <span className="email-title">LESS &amp; SASS, which one is good?</span>
                                                            <span className="email-desc">Nam vulputate cursus imperdiet. Sed sodales urna vitae ipsum iaculis, at fermentum...</span>
                                                            <span className="email-time">2 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox9"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox9"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user">
                                                        <img src="../assets/img/user/user-14.jpg" alt="" />
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Nadine Barnes</span>
                                                            <span className="email-title">Simple Line Icons is available on Color Admin v1.4</span>
                                                            <span className="email-desc">Maecenas auctor dui sit amet tristique congue. Pellentesque lobortis nulla quam. Etiam in vulputate magna...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox10"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox10"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-grey">
                                                        <span className="text-white">E</span>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Ellen Underwood</span>
                                                            <span className="email-title">Font Awesome 5 is available now</span>
                                                            <span className="email-desc">Proin consectetur accumsan rhoncus. Nulla porta orci ultricies lectus consequat fringilla. Vestibulum ante ipsum primis in faucibus...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox11"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox11"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-grey">
                                                        <span className="text-white">W</span>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">newsletter@wrapbootstrap.com</span>
                                                            <span className="email-title">Cyber week sale! Save up to 45%</span>
                                                            <span className="email-desc">Praesent id pulvinar orci. Donec ac metus non ligula faucibus venenatis. Suspendisse tortor est, placerat eu dui sed...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox12"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox12"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-grey">
                                                        <span className="text-white">S</span>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Starbucks</span>
                                                            <span className="email-title">Get your favorite Grande handcrafted beverage at $13</span>
                                                            <span className="email-desc">Nam vulputate cursus imperdiet. Sed sodales urna vitae ipsum iaculis, at fermentum...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox13"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox13"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-grey">
                                                        <i className="fab fa-github-alt text-white"></i>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Github</span>
                                                            <span className="email-title">Sidebar animation bugfix</span>
                                                            <span className="email-desc">Nam sit amet lacinia massa, sit amet blandit urna. Duis pharetra ex id ipsum posuere...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox14"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox14"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user bg-grey">
                                                        <span className="text-white">W</span>
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Wrapbootstrap</span>
                                                            <span className="email-title">Bootstrap Framework is awesome</span>
                                                            <span className="email-desc">Etiam enim ipsum, malesuada in consectetur interdum, malesuada et lacus. Aenean faucibus turpis lorem...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox15"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox15"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user">
                                                        <img src="../assets/img/user/user-2.jpg" alt="" />
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Gerald Huff</span>
                                                            <span className="email-title">Handlebars help you to build semantic template </span>
                                                            <span className="email-desc">Proin consectetur accumsan rhoncus. Nulla porta orci ultricies lectus consequat fringilla. Vestibulum ante ipsum primis in faucibus...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox16"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox16"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user">
                                                        <img src="../assets/img/user/user-3.jpg" alt="" />
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Rick	Hopkins</span>
                                                            <span className="email-title">jQuery 2++ no longer compatibility with the old browser</span>
                                                            <span className="email-desc">Suspendisse ut urna orci. Vivamus ac diam sollicitudin, consequat mauris id, facilisis ipsum. Nam feugiat nisl a justo...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox17"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox17"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user">
                                                        <img src="../assets/img/user/user-4.jpg" alt="" />
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Jan Scott</span>
                                                            <span className="email-title">LESS &amp; SASS, which one is good?</span>
                                                            <span className="email-desc">Nam vulputate cursus imperdiet. Sed sodales urna vitae ipsum iaculis, at fermentum...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="email-checkbox">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" data-checked="email-checkbox" id="emailCheckbox18"/>
                                                                <label className="custom-control-label" htmlFor="emailCheckbox18"></label>
                                                        </div>
                                                    </div>
                                                    <a href="email_detail.html" className="email-user">
                                                        <img src="../assets/img/user/user-5.jpg" alt="" />
                                                    </a>
                                                    <div className="email-info">
                                                        <a href="email_detail.html">
                                                            <span className="email-sender">Nadine Barnes</span>
                                                            <span className="email-title">Simple Line Icons is available on Color Admin v1.4</span>
                                                            <span className="email-desc">Maecenas auctor dui sit amet tristique congue. Pellentesque lobortis nulla quam. Etiam in vulputate magna...</span>
                                                            <span className="email-time">3 months ago</span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* <!-- end list-email --> */}
                                            </div><div className="slimScrollBar"
                                                style={{ background: "#000000", width: '7px', position: 'absolute', top: '52px', opacity: "0.4", display: 'none', borderRadius: '7px', zIndex: '99', right: '1px', height: '62.7451px' }}
                                            ></div><div className="slimScrollRail" style={{ width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: '1px'}}></div></div>
                                        {/* <!-- end scrollbar --> */}
                                    </div>
                                    {/* <!-- end vertical-box-inner-cell --> */}
                                </div>
                                {/* <!-- end vertical-box-cell --> */}
                            </div>
                            {/* <!-- end vertical-box-row --> */}
                            {/* <!-- begin wrapper --> */}
                            <div className="wrapper clearfix d-flex align-items-center">
                                <div className="text-inverse f-w-600">1,232 messages</div>
                                <div className="btn-group ml-auto">
                                    <button className="btn btn-white btn-sm">
                                        <i className="fa fa-fw fa-chevron-left"></i>
                                    </button>
                                    <button className="btn btn-white btn-sm">
                                        <i className="fa fa-fw fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                            {/* <!-- end wrapper --> */}
                        </div>
                        {/* <!-- end vertical-box --> */}
                    </div>
                    {/* <!-- end vertical-box-column --> */}
                </div>
                {/* <!-- end vertical-box --> */}
            </div>
        </>
    );
}

export default Chat;