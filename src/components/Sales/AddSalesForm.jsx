/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { capitalize, isEmpty, uniq } from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { clothSizes, filterSizeOptionsFn, formatColorOptionsFn } from "../../config/helpers/dataHelpers";
import { addNewSaleRequest } from "../../config/store/actions/saleActions";

const AddSalesForm = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.products);
    const { creating } = useSelector((state) => state.sales);
    const [colorOptions, setColorOptions] = useState([]);
    const [setsizeOptions, setSetsizeOptions] = useState([]);
    const [singleProduct, setSingleProduct] = useState({})
    const schema = yup
        .object({
            color: yup.string().required(),
            size: yup.string().required(),
            amount: yup.string().required(),
            artNumber: yup
                .string()
                .required('This field is required')
                .length(8, 'Must be 8 characters'),
        })
        .required();

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            mode: 'onChange',
        });
    let watchCode = watch('artNumber', '');

    const onSubmit = (data) => dispatch(addNewSaleRequest(singleProduct.id, data));

    useEffect(() => {
        if (watchCode.length === 8) {
            setSingleProduct(allProducts.find(prod => prod.artNumber === watchCode) || {});
        } else {
            setSingleProduct({});
        }
    }, [watchCode]);

    useEffect(() => {
        if (!isEmpty(singleProduct)) {
            setSetsizeOptions(filterSizeOptionsFn(clothSizes, singleProduct.variants.map(it => it.size)));
            setColorOptions(formatColorOptionsFn(uniq(singleProduct.variants.map(varie => capitalize(varie.color)))));
        }
    }, [singleProduct])

    return (
        <div className='card-body'>
            <div className='row'>
                <div className='col-lg-2 col-sm-6 col-12'>
                    <div className='form-group'>
                        <label>Product Code</label>
                        <input type='text' {...register("artNumber", { required: true })}
                            aria-invalid={errors.artNumber ? "true" : "false"} />
                        <p>{errors.artNumber?.message}</p>
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-12'>
                    <div key={singleProduct} className='form-group'>
                        <label>Prod Name</label>
                        <input disabled type='text' value={singleProduct.name || ''} />
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-12'>
                    <div className='form-group'>
                        <label>Color</label>
                        <select disabled={!(watchCode.length === 8 && !isEmpty(singleProduct))} className='form-select' {...register("color")}
                            aria-invalid={errors.color ? "true" : "false"} >
                            <option value=''>Choose Color</option>
                            {colorOptions.map((i) => (
                                <option
                                    key={i.value}
                                    value={i.value}>
                                    {i.label}
                                </option>
                            ))}
                        </select>
                        <p>{errors.color?.message && "This field is required"}</p>
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-12'>
                    <div className='form-group'>
                        <label>Size</label>
                        <select disabled={!(watchCode.length === 8 && !isEmpty(singleProduct))} className='form-select' {...register("size")} aria-invalid={errors.discount ? "true" : "false"}>
                            <option value=''>Choose Size</option>
                            {setsizeOptions.map((i) => (
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
                <div className='col-lg-2 col-sm-6 col-12'>
                    <div className='form-group'>
                        <label>Amount</label>
                        <input disabled={!(watchCode.length === 8 && !isEmpty(singleProduct))} type='text' {...register("amount")}
                            aria-invalid={errors.amount ? "true" : "false"} />
                        <p>{errors.amount?.message && "This field is required"}</p>
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-12'>
                    <div className='form-group'>
                        <label style={{ visibility: "hidden" }}>Product Code</label>
                        <button
                            disabled={!(watchCode.length === 8 && !isEmpty(singleProduct)) || creating}
                            className='btn card-btn'
                            onClick={handleSubmit(onSubmit)}>
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
