import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { expenseCategories } from "../../config/helpers/dataHelpers";
import { addExpenseRequest } from "../../config/store/actions/expenseActions";

const AddExpenseForm = () => {
    const dispatch = useDispatch();
    const { creating } = useSelector((state) => state.expenses);
    const schema = yup
        .object({
            category: yup.string().required(),
            amount: yup.string().required(),
            description: yup.string().required(),

        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema),
        });

    const onSubmit = (data) =>
        dispatch(addExpenseRequest(data));

    return (
        <div className='card-body'>
            <div className='row'>
                <div className='col-lg-3 col-sm-6 col-6'>
                    <div className='form-group'>
                        <label>Category Name</label>
                        <select className='form-select' {...register("category")}
                            aria-invalid={errors.category ? "true" : "false"} >
                            <option value=''>Choose Category</option>
                            {expenseCategories.map((i) => (
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
                        <label>Amount</label>
                        <input type='text' {...register("amount")}
                            aria-invalid={errors.amount ? "true" : "false"} />
                        <p>{errors.amount?.message && "This field is required"}</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 col-12'>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea className='form-control' {...register("description")}
                            aria-invalid={errors.description ? "true" : "false"}></textarea>
                        <p>{errors.description?.message && "This field is required"}</p>
                    </div>
                </div>
                <div className='col-lg-2 col-sm-6 col-6'>
                    <div className='form-group'>
                        <label style={{ visibility: "hidden" }}>Product Code</label>
                        <button
                            disabled={creating}
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

export default AddExpenseForm;
