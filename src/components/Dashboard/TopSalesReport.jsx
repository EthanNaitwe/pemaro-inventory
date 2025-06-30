import { Empty } from "antd";
import { groupBy, isEmpty, sumBy } from "lodash";
import PropTypes, { array } from "prop-types";
import { useSelector } from "react-redux";
import { formatSubCategoryAndName } from "../../config/helpers/dataHelpers";

const TopSalesReport = ({ title }) => {
  const { allSales } = useSelector((state) => state.sales);
  const { allProducts } = useSelector((state) => state.products);
  const grouped = groupBy(allSales, "product_id");

  const arr = [];
  for (const key in grouped) {
    if (Object.prototype.hasOwnProperty.call(grouped, key)) {
      const element = grouped[key];
      arr.push({
        [key]: sumBy(
          element,
          (item) => parseInt(item.amount, 10) * parseInt(item.quantity, 10)
        ),
      });
    }
  }

  // Re-arrange the array to be in descending order
  arr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

  const products = arr.map((item) => {
    const product = allProducts.find(
      (prod) => prod.id === Object.keys(item)[0]
    );
    return {
      ...item,
      id: product.id,
      sub_category: product.sub_category,
      food: product.food,
      food_category: product.food_category,
    };
  });

  const filteredProd = products
    .filter(
      (item) =>
        item.food_category !== "beverages" && item.sub_category !== "Bites"
    )
    .slice(0, 5);

  return (
    <div className="col-lg-4 col-sm-12 col-12 d-flex">
      <div className="card flex-fill">
        <div className="card-header pb-0 d-flex justify-content-between align-items-center">
          <h4 className="card-title mb-0">{title}</h4>
          <div className="dropdown">
            <span
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className="dropset"
            >
              <i className="fa fa-ellipsis-v"></i>
            </span>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive dataview">
            {isEmpty(allSales) && <Empty />}
            {!isEmpty(allSales) && (
              <table className="table datatable">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Product Name</th>
                    <th>Amount (UGX)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProd.map((prod, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{`${formatSubCategoryAndName(
                          prod.sub_category,
                          prod.food
                        )}`}</td>
                        <td>{prod[prod.id].toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TopSalesReport.defaultProps = {
  columns: [],
  data: [],
};

TopSalesReport.propTypes = {
  columns: PropTypes.oneOfType([array]),
  data: PropTypes.oneOfType([array]),
  title: PropTypes.string.isRequired,
};

export default TopSalesReport;
