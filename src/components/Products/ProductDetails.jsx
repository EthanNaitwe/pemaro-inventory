/* eslint-disable react-hooks/exhaustive-deps */
import JsBarcode from 'jsbarcode';
import { isEmpty } from 'lodash';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleProduct } from '../../config/store/actions/productActions';
import { setProductVED } from '../../config/store/actions/settingsActions';
import CardHeader from '../common/CardHeader';

const ProductDetails = () => {
    const dispatch = useDispatch();

    const { singleProduct, allProducts } = useSelector((state) => state.products);

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
                    <div className='col-lg-12 col-sm-12'>
                        <div className='card general-details'>
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
                                            <h4>Selling Price</h4>
                                            <h6>{`${parseInt(singleProduct?.minimum_price, 10).toLocaleString()} UGX`}</h6>
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
                </div>

            </div>
        </div>
    )
}

export default ProductDetails;
