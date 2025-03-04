import { useDispatch } from 'react-redux';
import plus from '../../assets/img/icons/plus.svg';
// import upload from '../../assets/img/icons/upload.svg';
import { setProductVED } from '../../config/store/actions/settingsActions';
import { clothSizes, discount, tax } from '../../config/helpers/formInputHelpers';
import { useForm } from 'react-hook-form';
import { isEmpty, some } from 'lodash';
import { useEffect } from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const AddProduct = () => {
    const dispatch = useDispatch();
    const schema = yup
        .object({
            name: yup.string().required(),
            size: yup.number().positive().integer().required(),
        })
        .required()

    const { register, handleSubmit,
        formState: { errors },
        watch } = useForm({
            resolver: yupResolver(schema),
        });


    const onSubmit = (data) => console.log('data', data);

    const productInputs = watch(["name", "size", "quantity", "artNumber", "color", "tax", "description", "percentage"]);

    useEffect(() => {
        console.log('errors', errors);
        console.log('productInputs', productInputs);
    }, [errors, productInputs])

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
                                    <input type='text' {...register("name", { required: true })}
                                        aria-invalid={errors.name ? "true" : "false"} />
                                    <p>{errors.name?.message}</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Size</label>
                                    <select className='form-select' {...register("size")}>
                                        <option value=''>Choose Size</option>
                                        {clothSizes.map((i) => (
                                            <option
                                                key={i.value}
                                                value={i.value}>
                                                {i.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Quantity</label>
                                    <input type="number" min={1} {...register("quantity")} />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Art Number</label>
                                    <input type='text' {...register("artNumber")} />
                                </div>
                            </div>
                            {/* <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Price</label>
                                    <input type='number' {...register("price")} />
                                </div>
                            </div> */}
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Color</label>
                                    <input type='text' {...register("color")} />
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Tax</label>
                                    <select className='form-select' {...register("tax")}>
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
                                    <select className='form-select' {...register("percentage")}>
                                        <option value=''>Percentage</option>
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
                                    <textarea className='form-control' {...register("description")}></textarea>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <button
                                    // disabled={some(productInputs, (item) => isEmpty(item))}
                                    className='btn btn-submit me-2' onClick={() => {
                                        // console.log('productInputs', productInputs)
                                        // console.log('errors', errors)
                                        handleSubmit(onSubmit)
                                    }}>Submit</button>
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
