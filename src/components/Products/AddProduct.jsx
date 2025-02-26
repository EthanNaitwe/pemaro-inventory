import { useDispatch } from 'react-redux';
import plus from '../../assets/img/icons/plus.svg';
import upload from '../../assets/img/icons/upload.svg';
import { setProductVED } from '../../config/store/actions/settingsActions';
import { clothSizes, discount, tax } from '../../config/helpers/formInputHelpers';

const AddProduct = () => {
    const dispatch = useDispatch();
    return (
        <div className='page-wrapper'>
            <div className='content'>
                <div className='page-header'>
                    <div className='page-title'>
                        <h4>Product Add</h4>
                        <h6>Create new product</h6>
                    </div>
                    <div className='page-btn'>
                        <div className='btn btn-added' onClick={() => dispatch(setProductVED(''))}>
                            <img src={plus} alt='img' className='me-1' />
                            View Product List
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Product Name</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Size</label>
                                    <select className='form-select'>
                                        <option value=''>Choose Size</option>
                                        {clothSizes.map((i) => (
                                            <option
                                                key={i.value}
                                                value="S">
                                                {i.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Quantity</label>
                                    <input type="number" min={1} />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Art Number</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Price</label>
                                    <input type='number' />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Color</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Tax</label>
                                    <select className='form-select'>
                                        <option value=''>Choose Tax</option>
                                        {tax.map((tx, i) => (
                                            <option
                                                key={i}
                                                value={tx}>
                                                {`${tx}%`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Discount Type</label>
                                    <select className='form-select'>
                                        <option>Percentage</option>
                                        {discount.map((dsc, i) => (
                                            <option
                                                key={i}
                                                value={dsc}>
                                                {`${dsc}%`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label> Product Image</label>
                                    <div className='image-upload'>
                                        <input type='file' />
                                        <div className='image-uploads'>
                                            <img src={upload} alt='img' />
                                            <h4>Drag & Drop</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-9 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Description</label>
                                    <textarea className='form-control'></textarea>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <span className='btn btn-submit me-2'>Submit</span>
                                <span className='btn btn-cancel'>Cancel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
