import { useDispatch } from "react-redux";
import plus from "../../assets/img/icons/plus.svg";
import upload from "../../assets/img/icons/upload.svg";
import { setProductVED } from "../../config/actions/settingsActions";

const AddProduct = () => {
    const dispatch = useDispatch();
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Product Add</h4>
                        <h6>Create new product</h6>
                    </div>
                    <div className="page-btn">
                        <div className="btn btn-added" onClick={() => dispatch(setProductVED(''))}>
                            <img src={plus} alt="img" className="me-1" />
                            View Product List
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Category</label>
                                    <select className="form-select">
                                        <option>Choose Category</option>
                                        <option>Computers</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Sub Category</label>
                                    <select className="form-select">
                                        <option>Choose Sub Category</option>
                                        <option>Fruits</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Brand</label>
                                    <select className="form-select">
                                        <option>Choose Brand</option>
                                        <option>Brand</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Unit</label>
                                    <select className="form-select">
                                        <option>Choose Unit</option>
                                        <option>Unit</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>SKU</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Minimum Qty</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label> Product Image</label>
                                    <div className="image-upload">
                                        <input type="file" />
                                        <div className="image-uploads">
                                            <img src={upload} alt="img" />
                                            <h4>Drag & Drop</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Tax</label>
                                    <select className="form-select">
                                        <option>Choose Tax</option>
                                        <option>2%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Discount Type</label>
                                    <select className="form-select">
                                        <option>Percentage</option>
                                        <option>10%</option>
                                        <option>20%</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="form-group">
                                    <label> Status</label>
                                    <select className="form-select">
                                        <option>Closed</option>
                                        <option>Open</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <a href="javascript:void(0);" className="btn btn-submit me-2">Submit</a>
                                <a href="productlist.html" className="btn btn-cancel">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
