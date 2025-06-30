import { groupBy, sumBy } from "lodash";
import PropTypes, { array } from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const NotificationsCard = ({ title }) => {
    const { allSales } = useSelector((state) => state.sales);

    const { systemSettings: { showAddProduct, showEditProduct, storeName, address1, address2 } } = useSelector((state) => state.settings);

    const grouped = groupBy(allSales, 'product_id');

    const arr = [];
    for (const key in grouped) {
        if (Object.prototype.hasOwnProperty.call(grouped, key)) {
            const element = grouped[key];
            arr.push({ [key]: sumBy(element, item => parseInt(item.amount, 10) * parseInt(item.quantity, 10)) });
        }
    }

    // Re-arrange the array to be in descending order
    arr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

    const { control } = useForm({
        defaultValues: { showAddProduct, showEditProduct },
    });

    return (
        <div className="col-lg-4 col-sm-12 col-12 d-flex m-2">
            <div className="card flex-fill">
                <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                    <h4 className="card-title mb-0">{title}</h4>
                    <div className="dropdown">
                        <span data-bs-toggle='dropdown' aria-expanded='false'
                            className="dropset">
                            <i className="fa fa-ellipsis-v"></i>
                        </span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive dataview">
                        <table className="table datatable">
                            <tbody>
                                <tr>
                                    <td>Can Add Products</td>
                                    <td>
                                        <Controller
                                            name="showAddProduct"
                                            control={control}
                                            render={({ field }) => (
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="flexSwitchCheckChecked"
                                                        disabled
                                                        checked={showAddProduct}
                                                        onChange={e => {
                                                            field.onChange(e.target.checked);
                                                            // dispatch(setShowAddProduct(e.target.checked));
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Can Edit Products</td>
                                    <td>
                                        <Controller
                                            name="showEditProduct"
                                            control={control}
                                            render={({ field }) => (
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="flexSwitchCheckChecked"
                                                        disabled
                                                        checked={showEditProduct}
                                                        onChange={e => {
                                                            field.onChange(e.target.checked);
                                                            // dispatch(setShowAddProduct(e.target.checked));
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Business Name</td>
                                    <td>{storeName}</td>
                                </tr>
                                <tr>
                                    <td>Address 1</td>
                                    <td>{address1}</td>
                                </tr>
                                <tr>
                                    <td>Address 2</td>
                                    <td>{address2}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

NotificationsCard.defaultProps = {
    columns: [],
    data: [],
};
NotificationsCard.propTypes = {
    columns: PropTypes.oneOfType([array]),
    data: PropTypes.oneOfType([array]),
    title: PropTypes.string.isRequired,
};

export default NotificationsCard;
