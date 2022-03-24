import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <a href="https://medium.com/@mehulkothari05/medium-blogs-on-your-react-app-a3898a729aad" className="button btn-light medium">
                <span><img className="img-circle" width="20" alt="" src="https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png" />
                    Inspired by this post on MEDIUM
                </span>
            </a>
            <footer className="fadeInUp col-md-12">
                <div className="footer-icons">
                    <ul className="navbar-nav ">
                        <li className="nav-item inline-block">
                            <a href="https://github.com/BillDin" aria-label="Github" className="nav-link text-github"><i
                                className="fa fa-github"></i></a></li>
                        <li className="nav-item inline-block">
                            <a href="https://medium.com/@cd034" aria-label="Medium" className="nav-link">

                                <span><img className="img-circle medium-icon" width="24" alt=""
                                    src="https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png" /></span></a>
                        </li>
                        <li className="nav-item inline-block"><a href="https://www.linkedin.com/in/chengcheng-ding-45b588173/" aria-label="LinkedIn" className="nav-link"><i className="fa fa-linkedin"
                        ></i></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
