import react from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/layouts/navbar';
import Sidebar from '../components/layouts/sidebar';
import Footer from '../components/layouts/footer';
import { ApiCall } from '../../helpers/api_calls';


const home = () => {
 
    /**
     * ----------------------------------------------------------------
     * State variables
     * ----------------------------------------------------------------
     */
    /**
     * ----------------------------------------------------------------
     * use Effect
     * ----------------------------------------------------------------
     */
   
    // getdata();
    // useEffect(() => {
        
    // }, [
        
    // ])
    return (
        <>
            {/* <Navbar />

            <Sidebar /> */}


            {/* <!-- begin #content --> */}
            <div id="content" className="content">
                {/* <!-- begin breadcrumb --> */}
                <ol className="breadcrumb float-xl-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    {/* <li className="breadcrumb-item active">Dashboard v2</li>     */}
                </ol>
                {/* <!-- end breadcrumb --> */}
                {/* <!-- begin page-header --> */}

                <h1 className="page-header">Dashboard <small></small></h1>

                {/* <!-- end page-header --> */}
                {/* <!-- begin row --> */}
                <div className="row">
                    {/* <!-- begin col-3 --> */}
                    <div className="col-xl-3 col-md-6">
                        <div className="widget widget-stats bg-white text-inverse">
                            <div className="stats-icon stats-icon-square bg-gradient-blue text-white"><i className="ion-ios-analytics"></i></div>
                            <div className="stats-content">
                                <div className="stats-title text-inverse-lighter">TODAY'S VISITS</div>
                                <div className="stats-number">7,842,900</div>
                                <div className="stats-progress progress">
                                    <div className="progress-bar" ></div>
                                    {/* style="width: 70.1%;" */}
                                </div>
                                <div className="stats-desc text-inverse-lighter">Better than last week (70.1%)</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end col-3 --> */}
                    {/* <!-- begin col-3 --> */}
                    <div className="col-xl-3 col-md-6">
                        <div className="widget widget-stats bg-white text-inverse">
                            <div className="stats-icon stats-icon-square bg-gradient-blue text-white"><i className="ion-ios-pricetags"></i></div>
                            <div className="stats-content">
                                <div className="stats-title text-inverse-lighter">TODAY'S PROFIT</div>
                                <div className="stats-number">180,200</div>
                                <div className="stats-progress progress">
                                    <div className="progress-bar" ></div>
                                    {/* style="width: 40.5%;" */}
                                </div>
                                <div className="stats-desc text-inverse-lighter">Better than last week (40.5%)</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end col-3 --> */}
                    {/* <!-- begin col-3 --> */}
                    <div className="col-xl-3 col-md-6">
                        <div className="widget widget-stats bg-white text-inverse">
                            <div className="stats-icon stats-icon-square bg-gradient-blue text-white"><i className="ion-ios-cart"></i></div>
                            <div className="stats-content">
                                <div className="stats-title text-inverse-lighter">NEW ORDERS</div>
                                <div className="stats-number">38,900</div>
                                <div className="stats-progress progress">
                                    <div className="progress-bar" ></div>
                                    {/* style="width: 76.3%;" */}
                                </div>
                                <div className="stats-desc text-inverse-lighter">Better than last week (76.3%)</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end col-3 --> */}
                    {/* <!-- begin col-3 --> */}
                    <div className="col-xl-3 col-md-6">
                        <div className="widget widget-stats bg-white text-inverse">
                            <div className="stats-icon stats-icon-square bg-gradient-blue text-white"><i className="ion-ios-chatboxes"></i></div>
                            <div className="stats-content">
                                <div className="stats-title text-inverse-lighter">NEW COMMENTS</div>
                                <div className="stats-number">3,988</div>
                                <div className="stats-progress progress">
                                    <div className="progress-bar" ></div>
                                    {/* style="width: 54.9%;" */}
                                </div>
                                <div className="stats-desc text-inverse-lighter">Better than last week (54.9%)</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end col-3 --> */}
                </div>
                {/* <!-- end row --> */}


                {/* <!-- begin row --> */}
                <div className="row">

                </div>
                {/* <!-- end row --> */}

            </div>
            {/* <!-- end #content --> */}

            {/* <Footer /> */}

        </>
    );
}

export default home;