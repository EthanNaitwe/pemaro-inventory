/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { setProductVED } from '../../config/store/actions/settingsActions';

import JsBarcode from 'jsbarcode';
import { capitalize, isEmpty, sumBy } from 'lodash';
import { useEffect, useRef } from 'react';
// import prod69 from '../../assets/img/product/product69.jpg';
import { yupResolver } from '@hookform/resolvers/yup';
import { Empty } from 'antd';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { clothSizes, getSizeLabel } from '../../config/helpers/dataHelpers';
import { addProductCategoryRequest, setSingleProduct } from '../../config/store/actions/productActions';
import CardHeader from '../common/CardHeader';
import WithDataLoader from '../common/loaders/WithDataLoader';

const ProductDetails = () => {
    const dispatch = useDispatch();

    const { singleProduct, addingCategory, allProducts, loading } = useSelector((state) => state.products);

    const schema = yup
        .object({
            size: yup.string().required(),
            color: yup.string().required(),
            quantity: yup.string().required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
        });

    const onSubmit = (data) =>
        dispatch(addProductCategoryRequest(singleProduct?.id, data))

    useEffect(() => {
        const filter = allProducts.find((prod) => prod.id === singleProduct?.id)
        if (!isEmpty(singleProduct))
            dispatch(setSingleProduct(filter))
    }, [allProducts])

    const barcodeRef = useRef(null);
    useEffect(() => {
        if (barcodeRef.current) {
            JsBarcode(barcodeRef.current, singleProduct?.artNumber, { format: "CODE128" });
        }
    }, [singleProduct]);

    return (
        <div className='page-wrapper' key={singleProduct}>
            <div className='content'>
                <div className='page-header'>
                    <div className='page-title'>
                        <h4>Product Details</h4>
                        <h6>Full details of a product</h6>
                    </div>

                    <div className='page-btn'>
                        <div className='btn btn-added' onClick={() => dispatch(setProductVED(''))}>
                            View Products
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-7 col-sm-12'>
                        <div className='card'>
                            <CardHeader title="General Details" />
                            <div className='card-body'>
                                <div className='bar-code-view'>
                                    <svg ref={barcodeRef}></svg>
                                </div>
                                <div className='productdetails'>
                                    <ul className='product-bar'>
                                        <li>
                                            <h4>Art Number</h4>
                                            <h6>{singleProduct?.artNumber}</h6>
                                        </li>
                                        <li>
                                            <h4>Product Name</h4>
                                            <h6>{singleProduct?.name}</h6>
                                        </li>
                                        <li>
                                            <h4>Quantity</h4>
                                            {/* (sumBy(item.variants, 'quantity') - item.sales.length) */}
                                            <h6>{sumBy(singleProduct?.variants, 'quantity') - singleProduct.sales.length}</h6>
                                        </li>
                                        <li>
                                            <h4>Tax</h4>
                                            <h6>{`${singleProduct?.tax} %`}</h6>
                                        </li>
                                        <li>
                                            <h4>Discount Type</h4>
                                            <h6>{`${singleProduct?.discount} %`}</h6>
                                        </li>
                                        <li>
                                            <h4>Description</h4>
                                            <h6>{singleProduct?.description}</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-sm-12'>
                        <div className='card'>
                            <CardHeader title="Category Details" />
                            <div className='row mt-3 ms-2 category-form'>
                                <div className='col-lg-3 col-sm-6 col-12'>
                                    <div className='form-group'>
                                        <label>Color</label>
                                        <input placeholder='Color' type='text' {...register("color", { required: true })}
                                            aria-invalid={errors.color ? "true" : "false"} />
                                        <p>{errors.color?.message && "Required"}</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-12'>
                                    <div className='form-group'>
                                        <label>Size</label>
                                        <select className='form-select' {...register("size")}
                                            aria-invalid={errors.size ? "true" : "false"}>
                                            <option value=''>Choose Size</option>
                                            {clothSizes.map((i) => (
                                                <option
                                                    key={i.value}
                                                    value={i.value}>
                                                    {i.label}
                                                </option>
                                            ))}
                                        </select>
                                        <p>{errors.size?.message && "Required"}</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-12'>
                                    <div className='form-group'>
                                        <label>Quantity</label>
                                        <input placeholder='Quantity' type="number" min={1} {...register("quantity", { required: true })}
                                            aria-invalid={errors.quantity ? "true" : "false"} />
                                        <p>{errors.quantity?.message && "Required"}</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-12'>
                                    <div className='form-group'>
                                        <label style={{ visibility: "hidden" }}>Submit</label>
                                        <button
                                            disabled={addingCategory}
                                            className='btn card-btn'
                                            onClick={handleSubmit(onSubmit)}>
                                            Submit{' '}
                                            {addingCategory && <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {loading && <WithDataLoader />}
                            {isEmpty(singleProduct?.variants) ? <Empty className='pb-4' /> :
                                <div className='card-body'>
                                    <div className='slider-product-details'>
                                        <div className='owl-carousel owl-theme product-slide'>
                                            <div className='table-responsive'>
                                                <table className='category-table table datanew'>
                                                    <thead>
                                                        <tr>
                                                            <th>Color</th>
                                                            <th>Size</th>
                                                            <th>Quantity</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {singleProduct?.variants.map((item) => {
                                                            const filtered = singleProduct.sales.filter(prod => prod.color === item.color && prod.size === item.size);
                                                            console.log(`filtered: ${item.color}:${item.size}:`, filtered)
                                                            return (
                                                                <tr key={item.id}>
                                                                    <td>{capitalize(item.color)}</td>
                                                                    <td>{`${getSizeLabel(item.size)} (${item.size})`}</td>
                                                                    <td>{capitalize(item.quantity)}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* <div className='slider-product'>
                                            <img src={prod69} alt='img' />
                                            <h4>macbookpro.jpg</h4>
                                            <h6>581kb</h6>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails;
