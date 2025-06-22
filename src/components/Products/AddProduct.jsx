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
import { foodCategories, foodSubCategories } from "../../config/helpers/dataHelpers";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { creating, createError } = useSelector((state) => state.products);
    const schema = yup
        .object({
            price: yup.string().required(),
            name: yup.string().required(),
            category: yup.string().required(),
        })
        .required();

    const {
        watch,
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
    
    let watchCategory = watch('category');

    useEffect(() => {
        console.log('watchCategory', watchCategory);
    }, [watchCategory])
    

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
                            <div className='col-lg-3 col-sm-6 col-6'>
                                <div className='form-group'>
                                    <label>Category</label>
                                    <select className='form-select' {...register("category")}
                                        aria-invalid={errors.category ? "true" : "false"} >
                                        <option value=''>Choose Category</option>
                                        {foodCategories.map((i) => (
                                            <option
                                                key={i}
                                                value={i}>
                                                {i}
                                            </option>
                                        ))}
                                    </select>
                                    <p>{errors.category?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-6'>
                                <div className='form-group'>
                                    <label>SubCategory</label>
                                    <select className='form-select' {...register("sub-category")}
                                        aria-invalid={errors.category ? "true" : "false"} >
                                        <option value=''>Choose Category</option>
                                        {foodSubCategories.filter(it=>it.category === watchCategory).map((i) => (
                                            <option
                                                key={i.subcategory}
                                                value={i.subcategory}>
                                                {i.subcategory}
                                            </option>
                                        ))}
                                    </select>
                                    <p>{errors.category?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-sm-6 col-6'>
                                <div className='form-group'>
                                    <label>FoodName</label>
                                    <input type='text' {...register("name", { required: true })}
                                        aria-invalid={errors.name ? "true" : "false"} />
                                    <p>{errors.name?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-sm-6 col-6'>
                                <div className='form-group'>
                                    <label>Price (UGX)</label>
                                    <input placeholder='Price' type="number" min={1} {...register("price", { required: true })}
                                        aria-invalid={errors.price ? "true" : "false"} />
                                    <p>{errors.price?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-1 col-sm-6 col-6'>
                                <button
                                    // disabled
                                    disabled={creating}
                                    className='btn btn-submit me-2 mt-4 py-2 w-100'
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
