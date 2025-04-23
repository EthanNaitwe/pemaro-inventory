/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { Empty, Modal, Radio } from "antd";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { paymentOptions, salesCategories, sumSalesSubTotal } from "../../../config/helpers/dataHelpers";
import { getProductsRequest, setClickCounts, setDisplaySaleCategory, setSelectedSaleCategory } from "../../../config/store/actions/productActions";

const AddSalesGrid = () => {
  const dispatch = useDispatch();
  const { allProducts, selectedSaleCategory, displaySaleCategory, clickCounts } = useSelector((state) => state.products);

  const [showDelete, setShowDelete] = useState(false);

  // Start
  const schema = yup
    .object({
      payment_method: yup.string().required()
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
  // End

  const onSubmit = (data) => {
    console.log('data 000123', data);
    console.log('clickCounts 000123', clickCounts);
    // const dataToSend = 
    clickCounts.map((item) => {
      // const _id = 
      console.log('item', item);
      return {
        id: 8
      }
    })
  }

  const handleCardClick = (id) => {
    dispatch(setClickCounts({
      ...clickCounts,
      [id]: (clickCounts[id] || 0) + 1, // Increment the count for the clicked card
    }));
  };

  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);

  useEffect(() => {
    switch (selectedSaleCategory) {
      case "all-items":
        dispatch(setDisplaySaleCategory(allProducts));
        break;
      case "foods":
        dispatch(setDisplaySaleCategory(allProducts.filter(item => item.food_category === selectedSaleCategory)));
        break;

      case "beverages":
        dispatch(setDisplaySaleCategory(allProducts.filter(item => item.food_category === selectedSaleCategory)));
        break;

      case "break-fast":
        dispatch(setDisplaySaleCategory(allProducts.filter(item => item.sub_category === "Break Fast")));
        break;

      case "special-dishes":
        dispatch(setDisplaySaleCategory(allProducts.filter(item => item.sub_category === "Special Dishes")));
        break;

      case "bites":
        dispatch(setDisplaySaleCategory(allProducts.filter(item => item.sub_category === "Bites")));
        break;

      case "others":
        dispatch(setDisplaySaleCategory(allProducts.filter(item => item.sub_category === "Others")));
        break;

      default:
        break;
    }
  }, [selectedSaleCategory, allProducts]);

  const handleCancel = () => setShowDelete(false);

  return (
    <div>
      <Modal className="payment-modal" okText="Confirm & Print" cancelText="Close" title="Sales" open={showDelete} onOk={handleSubmit(onSubmit)} onCancel={handleCancel}>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="form-group">
              <select className="form-select" {...register("payment_method")}
                aria-invalid={errors.payment_method ? "true" : "false"} >
                <option value=''>Payment Method</option>
                {paymentOptions.map((option) => (
                  <option
                    style={{ maxHeight: '50%' }}
                    key={option.value}
                    value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p>{errors.payment_method?.message && "This field is required"}</p>
            </div>
          </div>
        </div>
      </Modal>
      <div className="parent-container-header">
        <div className="payment-header">
        </div>
        <div className="grid-header">
          {salesCategories.map((item, i) => {
            return (
              <>
                <div key={i} className={`btn-category badges ${selectedSaleCategory === item.value ? 'btn-category-focus' : 'btn-category-unfocus'}`}
                  onClick={() => dispatch(setSelectedSaleCategory(item.value))}
                >
                  {item.label}
                </div>{' '}
              </>
            )
          })}
        </div>
      </div>
      <div className="parent-container">
        <div className="sales-payment-ch">
          {(isEmpty(clickCounts) || sumSalesSubTotal(allProducts, clickCounts) === 0) && <Empty />}
          {!isEmpty(clickCounts) && <table className="table datatable">
            <tbody>
              {Object.keys(clickCounts).map((item, i) => {
                return (
                  <>
                    {
                      clickCounts[item] > 0 && <tr key={i}>
                        <td className="td-sales">{clickCounts[item]}</td>
                        <td className="td-sales">{allProducts.find(prod => prod.id === item).food}</td>
                        <td className="td-sales">{(allProducts.find(prod => prod.id === item).minimum_price * clickCounts[item]).toLocaleString()}</td>
                        <td className="td-sales">
                          <Radio.Group size="small" value="" onChange={e => {
                            dispatch(setClickCounts({
                              ...clickCounts,
                              [item]: e.target.value === "plus" ? clickCounts[item] + 1 : clickCounts[item] - 1,
                            }));
                          }}>
                            <Radio.Button disabled={clickCounts[item] === 0} className="btn-radio" value="minus">{`-`}</Radio.Button>
                            <Radio.Button className="btn-radio" value="plus">{`+`}</Radio.Button>
                          </Radio.Group>
                        </td>
                      </tr>
                    }
                  </>
                )
              })}
              {sumSalesSubTotal(allProducts, clickCounts) > 0 && <>
                <td className="td-sales"></td>
                <td className="td-sales" style={{ textAlign: "right" }}>Total:</td>
                <td className="td-sales">{`${sumSalesSubTotal(allProducts, clickCounts).toLocaleString()}/=`}</td>
                <td className="td-sales">
                  <div className="btn-add-sales text-center"
                    onClick={() => setShowDelete(!showDelete)}>
                    Add Sales
                  </div>
                </td>
              </>}
            </tbody>
          </table>}
        </div>
        {!isEmpty(allProducts) && <div className="sales-grid-ch">
          {displaySaleCategory.map((item, i) => {
            return (
              <div key={i} className='grid-card'
                onClick={() => handleCardClick(item.id || i)}
              >
                <h5 className="text-center">{`${item.sub_category}:`}</h5>
                <h6 className="text-center">{item.food}</h6>
                {clickCounts[item.id] > 0 && <h6 className="text-center">{clickCounts[item.id]}</h6>}
              </div>
            )
          })}
        </div>}
      </div>
    </div>
  )
}

export default AddSalesGrid;
