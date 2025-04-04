/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import plus from '../../assets/img/icons/plus.svg';
import { clearCreateError, createProductRequest } from "../../config/store/actions/productActions";
import { setProductVED } from '../../config/store/actions/settingsActions';
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { creating, createError } = useSelector((state) => state.products);
    const schema = yup
        .object({
            minimum_price: yup.string().required(),
            name: yup.string().required(),
            purchasing_price: yup.string().required(),
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
                            <div className='col-lg-4 col-sm-6 col-6'>
                                <div className='form-group'>
                                    <label>Product Name</label>
                                    <input type='text' {...register("name", { required: true })}
                                        aria-invalid={errors.name ? "true" : "false"} />
                                    <p>{errors.name?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6 col-6'>
                                <div className='form-group'>
                                    <label>Purchasing Price</label>
                                    <input placeholder='Price' type="number" min={1} {...register("purchasing_price", { required: true })}
                                        aria-invalid={errors.purchasing_price ? "true" : "false"} />
                                    <p>{errors.purchasing_price?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6 col-6'>
                                <div className='form-group'>
                                    <label>Minimum Selling Price</label>
                                    <input placeholder='Price' type="number" min={1} {...register("minimum_price", { required: true })}
                                        aria-invalid={errors.minimum_price ? "true" : "false"} />
                                    <p>{errors.minimum_price?.message && "This field is required"}</p>
                                </div>
                            </div>
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
                                    className='btn btn-submit me-2'
                                    onClick={handleSubmit(onSubmit)}>
                                    Submit{' '}
                                    {creating && (
                                        <div className="spinner-border spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
