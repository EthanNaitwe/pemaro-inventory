import PropTypes, { array } from "prop-types";

const PaymentType = ({ register, errors, paymentOptions }) => {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-3 col-3">
        <div className="form-group">
          <label>Print Receipt</label>
          <input type="checkbox" {...register("print_receipt")} />
        </div>
      </div>
      <div className="col-lg-9 col-sm-9 col-9">
        <div className="form-group">
          <label>Payment Method</label>
          <select
            className="form-select"
            {...register("payment_method")}
            aria-invalid={errors.payment_method ? "true" : "false"}
          >
            <option value="">Payment Method</option>
            {paymentOptions.map((option) => (
              <option
                style={{ maxHeight: "50%" }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <p>{errors.payment_method?.message && "This field is required"}</p>
        </div>
      </div>
    </div>
  );
};

PaymentType.defaultProps = {
  register: () => {},
  errors: {},
  paymentOptions: [],
};
PaymentType.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  paymentOptions: PropTypes.arrayOf([array]),
};

export default PaymentType;
