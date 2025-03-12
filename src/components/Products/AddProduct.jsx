/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import plus from '../../assets/img/icons/plus.svg';
import { discount, tax } from '../../config/helpers/dataHelpers';
import { clearCreateError, createProductRequest } from "../../config/store/actions/productActions";
import { setProductVED } from '../../config/store/actions/settingsActions';
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { creating, createError } = useSelector((state) => state.products);
    const schema = yup
        .object({
            tax: yup.string().required(),
            name: yup.string().required(),
            discount: yup.string().required(),
            artNumber: yup.string().required(),
            description: yup.string().required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
        });

    const onToast = (text) => toast.warn(text);
    useEffect(() => {
        if (createError && !creating) onToast(createError);
        return () => {
            dispatch(clearCreateError());
        }
    }, [createError, creating]);

    const onSubmit = (data) =>
        dispatch(createProductRequest(data));

    return (
        <div className='page-wrapper'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
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
                                    <input type='text' {...register("name", { required: true })}
                                        aria-invalid={errors.name ? "true" : "false"} />
                                    <p>{errors.name?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Product Code</label>
                                    <input type='text' {...register("artNumber")}
                                        aria-invalid={errors.artNumber ? "true" : "false"} />
                                    <p>{errors.artNumber?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Tax</label>
                                    <select className='form-select' {...register("tax")}
                                        aria-invalid={errors.tax ? "true" : "false"} >
                                        <option value=''>Choose Tax</option>
                                        {tax.map((tx, i) => (
                                            <option
                                                key={i}
                                                value={tx}>
                                                {`${tx}%`}
                                            </option>
                                        ))}
                                    </select>
                                    <p>{errors.tax?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Discount Type</label>
                                    <select className='form-select' {...register("discount")} aria-invalid={errors.discount ? "true" : "false"}>
                                        <option value=''>Percentage</option>
                                        {discount.map((dsc, i) => (
                                            <option
                                                key={i}
                                                value={dsc}>
                                                {`${dsc}%`}
                                            </option>
                                        ))}
                                    </select>
                                    <p>{errors.discount?.message && "This field is required"}</p>
                                </div>
                            </div>
                            {/* <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label> Product Image</label>
                                    <div className='image-upload'>
                                        <input type='file' {...register("imageUrl")} />
                                        <div className='image-uploads'>
                                            <img src={upload} alt='img' />
                                            <h4>Drag & Drop</h4>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className='col-lg-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Description</label>
                                    <textarea className='form-control' {...register("description")}
                                        aria-invalid={errors.description ? "true" : "false"}></textarea>
                                    <p>{errors.description?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <button
                                    disabled={creating}
                                    className='btn btn-submit me-2' onClick={handleSubmit(onSubmit)}>
                                    Submit{' '}
                                    {creating && <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>}</button>
                                <button className='btn btn-cancel'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
