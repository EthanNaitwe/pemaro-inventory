/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { addNewSaleRequest } from "../../config/store/actions/saleActions";

const AddSalesForm = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.products);
    const { creating } = useSelector((state) => state.sales);
    const [singleProduct, setSingleProduct] = useState({})
    const schema = yup
        .object({
            amount: yup.string().required(),
            artNumber: yup
                .string()
                .required('This field is required'),
        })
        .required();

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            defaultValues: {
                quantity: 1,
            },
            resolver: yupResolver(schema),
            mode: 'onChange',
        });
    let [watchCode, watchQuantity] = watch(['artNumber', 'quantity']);

    const onSubmit = (data) => dispatch(addNewSaleRequest(singleProduct.id, { ...data, amount: singleProduct.purchasing_price }));

    useEffect(() => {
        setSingleProduct(allProducts.find(prod => prod.artNumber === watchCode) || {});
    }, [watchCode]);

    return (
        <div className='card-body'>
            <div className='row'>
                <div className='col-lg-2 col-sm-6 col-6'>
                    <div className='form-group'>
                        <label>Product Code</label>
                        <input type='text' {...register("artNumber", { required: true })}
                            aria-invalid={errors.artNumber ? "true" : "false"} />
                        <p>{errors.artNumber?.message}</p>
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-6'>
                    <div key={singleProduct} className='form-group'>
                        <label>Prod Name</label>
                        <input disabled type='text' value={singleProduct?.name || ''} />
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-6'>
                    <div className='form-group'>
                        <label>Quantity</label>
                        <input disabled={!(!isEmpty(singleProduct))} type='number' {...register("quantity", { required: true })}
                            aria-invalid={errors.quantity ? "true" : "false"} />
                        <p>{errors.quantity?.message}</p>
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-6'>
                    <div className='form-group'>
                        <label>Price per Item (UGX)</label>
                        <input disabled type='text' {...register("amount")}
                            value={singleProduct?.purchasing_price ? parseInt(singleProduct?.purchasing_price, 10).toLocaleString() : 0} />
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-6'>
                    <div className='form-group'>
                        <label>Total Amount (UGX)</label>
                        <input disabled type='text'  {...register("sub_total")}
                            value={singleProduct?.purchasing_price ? parseInt(singleProduct?.purchasing_price * watchQuantity, 10).toLocaleString() : 0} />
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-6'>
                    <div className='form-group'>
                        <label style={{ visibility: "hidden" }}>Product Code</label>
                        <button
                            disabled={!(!isEmpty(singleProduct)) || creating}
                            className='btn card-btn'
                            onClick={() => handleSubmit(onSubmit)()}>
                            Submit{' '}
                            {creating && <div className="spinner-border spinner-border-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSalesForm;
