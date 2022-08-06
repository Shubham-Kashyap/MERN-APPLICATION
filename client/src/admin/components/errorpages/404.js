import { react } from 'react';
import { useNavigate } from 'react-router-dom';

const $404 = () => {
    const navigate = useNavigate();
    const redirectTo = (e) => {
        e.preventDefault();
        const auth = localStorage.getItem('authtoken') ? localStorage.getItem('authtoken') : null;
        return auth ? navigate('/dashboard') : navigate('/login');
    }
    return (
        <>
            <div id="page-container" className="fade">
                {/* <!-- begin error --> */}
                <div className="error">
                    <div className="error-code">404</div>
                    <div className="error-content">
                        <div className="error-message">We couldn't find it...</div>
                        <div className="error-desc mb-3 mb-sm-4 mb-md-5">
                            The page you're looking for doesn't exist. <br />
                            Perhaps, there pages will help find what you're looking for.
                        </div>
                        <div>
                            <a href="#" onClick={ (e) => { redirectTo(e)}} className="btn btn-success p-l-20 p-r-20">Go Home</a>
                        </div>
                    </div>
                </div>
                {/* <!-- end error --> */}

               

                {/* <!-- begin scroll to top btn --> */}
                <a href="#" className="btn btn-icon btn-circle btn-primary btn-scroll-to-top fade" data-click="scroll-top"><i className="fa fa-angle-up"></i></a>
                {/* <!-- end scroll to top btn --> */}
            </div>
            {/* <!-- end page container --> */}
        </>
    );
};

export default $404;