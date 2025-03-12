/* eslint-disable react-hooks/exhaustive-deps */

import { useSelector } from 'react-redux';
import dash1Img from '../assets/img/icons/dash1.svg';
import dash2Img from '../assets/img/icons/dash2.svg';
import dash3Img from '../assets/img/icons/dash3.svg';
import dash4Img from '../assets/img/icons/dash4.svg';
import prod22 from '../assets/img/product/product22.jpg';
import prod23 from '../assets/img/product/product23.jpg';
import prod24 from '../assets/img/product/product24.jpg';
import prod6 from '../assets/img/product/product6.jpg';
import LineDashed from './Charts/LineDashed';
import { useEffect } from 'react';
import { orderBy } from 'lodash';

const Dashboard = () => {
    const { allProducts } = useSelector((state) => state.products);


    useEffect(() => {
        console.log('first', orderBy(allProducts, ['date'], ['desc']).map(prod => ({ name: prod.name, artNumber: prod.artNumber })).slice(0, 4))
        // console.log('first', orderBy(allProducts, ['date'], ['desc']))
        // x.slice(0, 4);
    }, [])

    const recentProds = [
        {
            name: 'Apple Earpods',
            price: '$891.2',
            img: prod22,
        },
        {
            name: 'iPhone 11',
            price: '$891.2',
            img: prod23,
        },
        {
            name: 'Samsung',
            price: '$891.2',
            img: prod24,
        },
        {
            name: 'Macbook Pro',
            price: '$891.2',
            img: prod6,
        },
    ]
    return (
        <div className='page-wrapper'>
            <div className='content'>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <div className='dash-widget'>
                            <div className='dash-widgetimg'>
                                <span>
                                    <img src={dash1Img} alt='img' />
                                </span>
                            </div>
                            <div className='dash-widgetcontent'>
                                <h5>UGX <span className='counters' data-count='307000'>307,000</span></h5>
                                <h6>Total Purchase Due</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <div className='dash-widget dash1'>
                            <div className='dash-widgetimg'>
                                <span>
                                    <img src={dash2Img} alt='img' />
                                </span>
                            </div>
                            <div className='dash-widgetcontent'>
                                <h5>UGX <span className='counters' data-count='4000'>4,000</span></h5>
                                <h6>Total Sales Due</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <div className='dash-widget dash2'>
                            <div className='dash-widgetimg'>
                                <span>
                                    <img src={dash3Img} alt='img' />
                                </span>
                            </div>
                            <div className='dash-widgetcontent'>
                                <h5>UGX <span className='counters' data-count='385000'>385,000</span></h5>
                                <h6>Total Sale Amount</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <div className='dash-widget dash3'>
                            <div className='dash-widgetimg'>
                                <span>
                                    <img src={dash4Img} alt='img' />
                                </span>
                            </div>
                            <div className='dash-widgetcontent'>
                                <h5>UGX <span className='counters' data-count='40000.00'>40000</span></h5>
                                <h6>Total Sale Amount</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12 d-flex'>
                        <div className='dash-count'>
                            <div className='dash-counts'>
                                <h4>100</h4>
                                <h5>Customers</h5>
                            </div>
                            <div className='dash-imgs'>
                                <i data-feather='user'></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12 d-flex'>
                        <div className='dash-count das1'>
                            <div className='dash-counts'>
                                <h4>100</h4>
                                <h5>Suppliers</h5>
                            </div>
                            <div className='dash-imgs'>
                                <i data-feather='user-check'></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12 d-flex'>
                        <div className='dash-count das2'>
                            <div className='dash-counts'>
                                <h4>100</h4>
                                <h5>Purchase Invoice</h5>
                            </div>
                            <div className='dash-imgs'>
                                <i data-feather='file-text'></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12 d-flex'>
                        <div className='dash-count das3'>
                            <div className='dash-counts'>
                                <h4>105</h4>
                                <h5>Sales Invoice</h5>
                            </div>
                            <div className='dash-imgs'>
                                <i data-feather='file'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-7 col-sm-12 col-12 d-flex'>
                        <div className='card flex-fill'>
                            <div className='card-header pb-0 d-flex justify-content-between align-items-center'>
                                <h5 className='card-title mb-0'>Purchase & Sales</h5>
                                <div className='graph-sets'>
                                </div>
                            </div>
                            <div className='card-body'>
                                {/* chart here */}
                                <LineDashed />
                                {/* <div id='sales_charts'></div> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-sm-12 col-12 d-flex'>
                        <div className='card flex-fill'>
                            <div className='card-header pb-0 d-flex justify-content-between align-items-center'>
                                <h4 className='card-title mb-0'>Recently Added Products</h4>
                                <div className='dropdown'>
                                    <span data-bs-toggle='dropdown' aria-expanded='false'
                                        className='dropset'>
                                        <i className='fa fa-ellipsis-v'></i>
                                    </span>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='table-responsive dataview'>
                                    <table className='table datatable '>
                                        <thead>
                                            <tr>
                                                <th>Sno</th>
                                                <th>Name</th>
                                                <th>Code</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderBy(allProducts, ['date'], ['desc']).map(prod => ({ name: prod.name, artNumber: prod.artNumber })).slice(0, 4).map((prod, i) => {
                                                return (<tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td className='productimgname'>
                                                        <span className='product-img'>
                                                            <i className="product-img-def fas fa-solid fa-person-dress fa-xl"></i>
                                                        </span>
                                                        <span>{prod.name}</span>
                                                    </td>
                                                    <td>{prod.artNumber}</td>
                                                </tr>)
                                            })}
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
