import { Empty } from "antd";
import { groupBy, isEmpty, sumBy } from "lodash";
import PropTypes, { array } from "prop-types";
import { useSelector } from "react-redux";
import { paymentOptions } from "../../config/helpers/dataHelpers";

const MethodsReport = ({ title }) => {
    const { allSales } = useSelector((state) => state.sales);
    const grouped = groupBy(allSales, 'payment_method');

    return (
        <div className="col-lg-4 col-sm-12 col-12 d-flex">
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
                        {isEmpty(allSales) && <Empty />}
                        {!isEmpty(allSales) && <table className="table datatable">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Payment Method</th>
                                    <th>Amount (UGX)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(grouped).map((prod, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{paymentOptions.find(thy => thy.value === prod)?.label}</td>
                                            <td>{(sumBy(grouped[prod], item => parseInt(item.amount, 10) * parseInt(item.quantity, 10))).toLocaleString()}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>}
                    </div>
                </div>
            </div>
        </div>
    )
}

MethodsReport.defaultProps = {
    columns: [],
    data: [],
};
MethodsReport.propTypes = {
    columns: PropTypes.oneOfType([array]),
    data: PropTypes.oneOfType([array]),
    title: PropTypes.string.isRequired,
};

export default MethodsReport;
