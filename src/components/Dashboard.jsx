
import dash4Img from "../assets/img/icons/dash4.svg";
import dash3Img from "../assets/img/icons/dash3.svg";
import dash2Img from "../assets/img/icons/dash2.svg";
import dash1Img from "../assets/img/icons/dash1.svg";
import prod6 from "../assets/img/product/product6.jpg";
import prod22 from "../assets/img/product/product22.jpg";
import prod23 from "../assets/img/product/product23.jpg";
import prod24 from "../assets/img/product/product24.jpg";
import LineDashed from "./Charts/LineDashed";

const Dashboard = () => {
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget">
                            <div className="dash-widgetimg">
                                <span>
                                    <img src={dash1Img} alt="img" />
                                </span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>UGX <span className="counters" data-count="307000">307,000</span></h5>
                                <h6>Total Purchase Due</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash1">
                            <div className="dash-widgetimg">
                                <span>
                                    <img src={dash2Img} alt="img" />
                                </span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>UGX <span className="counters" data-count="4000">4,000</span></h5>
                                <h6>Total Sales Due</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash2">
                            <div className="dash-widgetimg">
                                <span>
                                    <img src={dash3Img} alt="img" />
                                </span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>UGX <span className="counters" data-count="385000">385,000</span></h5>
                                <h6>Total Sale Amount</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="dash-widget dash3">
                            <div className="dash-widgetimg">
                                <span>
                                    <img src={dash4Img} alt="img" />
                                </span>
                            </div>
                            <div className="dash-widgetcontent">
                                <h5>UGX <span className="counters" data-count="40000.00">40000</span></h5>
                                <h6>Total Sale Amount</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 d-flex">
                        <div className="dash-count">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Customers</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather="user"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 d-flex">
                        <div className="dash-count das1">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Suppliers</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather="user-check"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 d-flex">
                        <div className="dash-count das2">
                            <div className="dash-counts">
                                <h4>100</h4>
                                <h5>Purchase Invoice</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather="file-text"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 d-flex">
                        <div className="dash-count das3">
                            <div className="dash-counts">
                                <h4>105</h4>
                                <h5>Sales Invoice</h5>
                            </div>
                            <div className="dash-imgs">
                                <i data-feather="file"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-sm-12 col-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-0">Purchase & Sales</h5>
                                <div className="graph-sets">
                                    {/* <ul>
                                        <li>
                                            <span>Sales</span>
                                        </li>
                                        <li>
                                            <span>Purchase</span>
                                        </li>
                                    </ul> */}
                                    {/* <div className="dropdown">
                                        <button className="btn btn-white btn-sm dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            2022
                                            <img src={dropdownImg} alt="img" className="ms-2" />
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item">2022</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item">2021</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="dropdown-item">2020</a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="card-body">
                                {/* chart here */}
                                <LineDashed />
                                {/* <div id="sales_charts"></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                                <h4 className="card-title mb-0">Recently Added Products</h4>
                                <div className="dropdown">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                                        className="dropset">
                                        <i className="fa fa-ellipsis-v"></i>
                                    </a>
                                    {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a href="/productlist" className="dropdown-item">Product List</a>
                                        </li>
                                        <li>
                                            <a href="/addproduct" className="dropdown-item">Product Add</a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive dataview">
                                    <table className="table datatable ">
                                        <thead>
                                            <tr>
                                                <th>Sno</th>
                                                <th>Products</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="productimgname">
                                                    <a href="/productlist" className="product-img">
                                                        <img src={prod22} alt="product" />
                                                    </a>
                                                    <a href="/productlist">Apple Earpods</a>
                                                </td>
                                                <td>$891.2</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td className="productimgname">
                                                    <a href="/productlist" className="product-img">
                                                        <img src={prod23} alt="product" />
                                                    </a>
                                                    <a href="/productlist">iPhone 11</a>
                                                </td>
                                                <td>$668.51</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="productimgname">
                                                    <a href="/productlist" className="product-img">
                                                        <img src={prod24} alt="product" />
                                                    </a>
                                                    <a href="/productlist">samsung</a>
                                                </td>
                                                <td>$522.29</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="productimgname">
                                                    <a href="/productlist" className="product-img">
                                                        <img src={prod6} alt="product" />
                                                    </a>
                                                    <a href="/productlist">Macbook Pro</a>
                                                </td>
                                                <td>$291.01</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
