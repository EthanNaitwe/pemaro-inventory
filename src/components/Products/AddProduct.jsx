import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import plus from '../../assets/img/icons/plus.svg';
import { clothSizes, discount, tax } from '../../config/helpers/formInputHelpers';
import { setProductVED } from '../../config/store/actions/settingsActions';
import { createProductRequest } from "../../config/store/actions/productActions";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { creating } = useSelector((state) => state.products);
    const schema = yup
        .object({
            name: yup.string().required(),
            size: yup.string().required(),
            quantity: yup.string().required(),
            artNumber: yup.string().required(),
            color: yup.string().required(),
            tax: yup.string().required(),
            discount: yup.string().required(),
            description: yup.string().required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
        });

    const onSubmit = (data) => {
        dispatch(createProductRequest(data));
        console.log('data', data)
    };

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
                                    <p>{errors.name?.message && "This field is required"}</p>
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
                                    <p>{errors.size?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Quantity</label>
                                    <input type="number" min={1} {...register("quantity")}
                                        aria-invalid={errors.quantity ? "true" : "false"} />
                                    <p>{errors.quantity?.message && "This field is required"}</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label>Art Number</label>
                                    <input type='text' {...register("artNumber")}
                                        aria-invalid={errors.artNumber ? "true" : "false"} />
                                    <p>{errors.artNumber?.message && "This field is required"}</p>
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
                                    <input type='text' {...register("color")}
                                        aria-invalid={errors.color ? "true" : "false"} />
                                    <p>{errors.color?.message && "This field is required"}</p>
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
