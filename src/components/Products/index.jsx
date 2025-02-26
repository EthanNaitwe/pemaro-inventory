import plus from '../../assets/img/icons/plus.svg'
import search from '../../assets/img/icons/search-whites.svg';
import prod1 from '../../assets/img/product/product1.jpg';
import prod2 from '../../assets/img/product/product2.jpg';
import prod3 from '../../assets/img/product/product3.jpg';
import prod4 from '../../assets/img/product/product4.jpg';
import prod5 from '../../assets/img/product/product5.jpg';
import prod6 from '../../assets/img/product/product6.jpg';
import prod7 from '../../assets/img/product/product7.jpg';
import prod8 from '../../assets/img/product/product8.jpg';
import prod9 from '../../assets/img/product/product9.jpg';
import prod11 from '../../assets/img/product/product11.jpg';
import prod17 from '../../assets/img/product/product17.jpg';
import eye from '../../assets/img/icons/eye.svg';
import edit from '../../assets/img/icons/edit.svg';
import deleteImg from '../../assets/img/icons/delete.svg';
import { setProductVED } from '../../config/store/actions/settingsActions';
import { useDispatch } from 'react-redux';

const ProductsList = () => {
    const dispatch = useDispatch();

    const products = [
        {
            id: 0,
            img: prod1,
            name: 'Macbook pro',
            design: 'PT001',
            artNo: 'PT001',
            color: 'Green',
            size: 'L',
            price: '1500.00',
            unit: 'pc',
            qty: '100.00',
            createdBy: 'Bryan',
        },
        {
            id: 3,
            img: prod4,
            name: 'Strawberry',
            design: 'PT004',
            artNo: 'PT004',
            color: 'Navy Blue',
            size: 'XL',
            price: '10.00',
            unit: 'pc',
            qty: '100.00',
            createdBy: 'Brenda',
        },
        // {
        //     id: 5,
        //     img: prod6,
        //     name: 'Macbook Pro',
        //     design: 'PT006',
        //     artNo: 'PT006',
        //     color: 'Black',
        //     size: 'S',
        //     price: '10.00',
        //     unit: 'pc',
        //     qty: '100.00',
        //     createdBy: 'Admin',
        // },
        // {
        //     id: 6,
        //     img: prod7,
        //     name: 'Apple Earpods',
        //     design: 'PT007',
        //     artNo: 'PT007',
        //     color: 'Black',
        //     size: 'L',
        //     price: '10.00',
        //     unit: 'pc',
        //     qty: '100.00',
        //     createdBy: 'Admin',
        // },
        // {
        //     id: 7,
        //     img: prod8,
        //     name: 'iPhone 11',
        //     design: 'PT008',
        //     artNo: 'PT008',
        //     color: 'Black',
        //     size: 'XL',
        //     price: '10.00',
        //     unit: 'pc',
        //     qty: '100.00',
        //     createdBy: 'Admin',
        // },
        // {
        //     id: 8,
        //     img: prod9,
        //     name: 'Samsung',
        //     design: 'PT009',
        //     artNo: 'PT009',
        //     color: 'Black',
        //     size: 'XL',
        //     price: '10.00',
        //     unit: 'pc',
        //     qty: '100.00',
        //     createdBy: 'Admin',
        // },
        // {
        //     id: 10,
        //     img: prod17,
        //     name: 'Limon',
        //     design: 'PT0011',
        //     artNo: 'PT0011',
        //     color: 'Black',
        //     size: 'XXL',
        //     price: '10.00',
        //     unit: 'kg',
        //     qty: '100.00',
        //     createdBy: 'Admin',
        // }
    ];


    return (
        <div className='page-wrapper'>
            <div className='content'>
                <div className='page-header'>
                    <div className='page-title'>
                        <h4>Product List</h4>
                        <h6>Manage your products</h6>
                    </div>
                    <div className='page-btn'>
                        <div className='btn btn-added' onClick={() => dispatch(setProductVED('add-product'))}>
                            <img src={plus} alt='img'
                                className='me-1' />
                            Add New Product
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        <div className='card mb-0' id='filter_inputs'>
                            <div className='card-body pb-0'>
                                <div className='row'>
                                    <div className='col-lg-12 col-sm-12'>
                                        <div className='row'>
                                            <div className='col-lg col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <select className='form-select'>
                                                        <option>Choose Product</option>
                                                        <option>Macbook pro</option>
                                                        <option>Orange</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-lg col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <select className='form-select'>
                                                        <option>Choose Category</option>
                                                        <option>Computers</option>
                                                        <option>Fruits</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-lg col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <select className='form-select'>
                                                        <option>Choose Sub Category</option>
                                                        <option>Computer</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* <div className='col-lg col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <select className='form-select'>
                                                        <option>Brand</option>
                                                        <option>N/D</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            <div className='col-lg col-sm-6 col-12 '>
                                                <div className='form-group'>
                                                    <select className='form-select'>
                                                        <option>Price</option>
                                                        <option>150.00</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-1 col-sm-6 col-12'>
                                                <div className='form-group'>
                                                    <a className='btn btn-filters ms-auto'>
                                                        <img src={search} alt='img' />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='table-responsive'>
                            <table className='table  datanew'>
                                <thead>
                                    <tr>
                                        <th>
                                            <label className='checkboxs'>
                                                <input type='checkbox' id='select-all' />
                                                <span className='checkmarks'></span>
                                            </label>
                                        </th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        {/* <th>Design</th> */}
                                        <th>Art Number</th>
                                        <th>Color</th>
                                        <th>Sizes</th>
                                        <th>price</th>
                                        {/* <th>Unit</th> */}
                                        <th>Created By</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <label className='checkboxs'>
                                                        <input type='checkbox' />
                                                        <span className='checkmarks'></span>
                                                    </label>
                                                </td>
                                                <td className='productimgname'>
                                                    <span className='product-img'>
                                                        <img src={item.img} alt='product' />
                                                    </span>
                                                    {item.name}
                                                </td>
                                                <td>{item.qty}</td>
                                                {/* <td>{item.design}</td> */}
                                                <td>{item.artNo}</td>
                                                <td>{item.color}</td>
                                                <td>{item.size}</td>
                                                <td>{item.price}</td>
                                                {/* <td>{item.unit}</td> */}
                                                <td>{item.createdBy}</td>
                                                <td>
                                                    <span className='me-3' onClick={() => dispatch(setProductVED('view-product'))}>
                                                        <img src={eye} alt='img' />
                                                    </span>
                                                    <span className='me-3' onClick={() => dispatch(setProductVED('add-product'))}>
                                                        <img src={edit} alt='img' />
                                                    </span>
                                                    <span className='me-3' onClick={() => {
                                                        //  dispatch(setProductVED('delete-product'))
                                                    }}>
                                                        <img src={deleteImg} alt='img' />
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList;
