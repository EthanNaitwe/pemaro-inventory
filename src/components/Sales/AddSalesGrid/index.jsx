/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { Empty, Modal, Radio } from "antd";
import { isEmpty, lowerCase } from "lodash";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { clickZeroFilter, paymentOptions, salesCategories, sumSalesSubTotal } from "../../../config/helpers/dataHelpers";
import { getProductsRequest, setClickCounts, setDisplaySaleCategory, setSelectedSaleCategory } from "../../../config/store/actions/productActions";
import { addNewSalesRequest, setShowPayModal } from "../../../config/store/actions/saleActions";

const AddSalesGrid = () => {
  const dispatch = useDispatch();
  const { allProducts, selectedSaleCategory, displaySaleCategory, clickCounts } = useSelector((state) => state.products);
  const { creatingBulk, showPayModal } = useSelector((state) => state.sales);

  const schema = yup
    .object({
      print_receipt: yup.boolean().required(),
      payment_method: yup.string().required()
    })
    .required();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        print_receipt: true,
        payment_method: 'cash',
        search_key: '',
      }
    });

  const watchSearchKey = watch("search_key");

  const onSubmit = (data) => {
    const dataToSend = [];
    Object.keys(clickZeroFilter(clickCounts)).map((item) => {
      let tl = allProducts.find(prod => prod.id === item);
      dataToSend.push({
        quantity: clickCounts[item],
        artNumber: tl.artNumber,
        amount: parseInt(tl.minimum_price, 10),
        sub_total: parseInt(tl.minimum_price, 10) * parseInt(clickCounts[item], 10),
        payment_method: data.payment_method,
        prod_id: tl.id,
      })
    })
    dispatch(addNewSalesRequest(dataToSend));
  };

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
        dispatch(setDisplaySaleCategory(allProducts.filter(item =>
          lowerCase(item.food).includes(lowerCase(watchSearchKey)))));
        break;
      case "foods":
        dispatch(setDisplaySaleCategory(allProducts.filter(item =>
          item.food_category === selectedSaleCategory && lowerCase(item.food).includes(lowerCase(watchSearchKey)))));
        break;

      case "beverages":
        dispatch(setDisplaySaleCategory(allProducts.filter(item =>
          item.food_category === selectedSaleCategory && lowerCase(item.food).includes(lowerCase(watchSearchKey)))));
        break;

      case "extras":
        dispatch(setDisplaySaleCategory(allProducts.filter(item =>
          item.food_category === selectedSaleCategory && lowerCase(item.food).includes(lowerCase(watchSearchKey)))));
        break;

      case "break-fast":
        dispatch(setDisplaySaleCategory(allProducts.filter(item =>
          item.sub_category === "Break Fast" && lowerCase(item.food).includes(lowerCase(watchSearchKey)))));
        break;

      case "special-dishes":
        dispatch(setDisplaySaleCategory(allProducts.filter(item =>
          item.sub_category === "Special Dishes" && lowerCase(item.food).includes(lowerCase(watchSearchKey)))));
        break;

      case "bites":
        dispatch(setDisplaySaleCategory(allProducts.filter(item =>
          item.sub_category === "Bites" && lowerCase(item.food).includes(lowerCase(watchSearchKey)))));
        break;

      case "others":
        dispatch(setDisplaySaleCategory(allProducts.filter(item =>
          item.sub_category === "Others" && lowerCase(item.food).includes(lowerCase(watchSearchKey)))));
        break;

      default:
        break;
    }
  }, [selectedSaleCategory, allProducts, watchSearchKey]);

  const handleCancel = () => dispatch(setShowPayModal(!showPayModal));

  return (
    <div>
      <Modal
        className="payment-modal"
        okText="Confirm & Print"
        cancelText="Close"
        title="Sales"
        open={showPayModal}
        onOk={handleSubmit(onSubmit)}
        onCancel={handleCancel}
        okButtonProps={{ loading: creatingBulk }}
      >
        <div className="row">
          <div className='col-lg-3 col-sm-3 col-3'>
            <div className='form-group'>
              <label>Print Receipt</label>
              <input type='checkbox' {...register("print_receipt")} />
            </div>
          </div>
          <div className="col-lg-9 col-sm-9 col-9">
            <div className="form-group">
              <label>Payment Method</label>
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
      <div className="row">
        <div className="col-lg-4 col-sm-3 col-12"></div>
        <div className='date-range col-lg-4 col-sm-6 col-12'>
          <div className="form-group form-search">
            <input type="text" placeholder="Search Product..." {...register("search_key")} />
          </div>
        </div>
        <div className="col-lg-4 col-sm-3 col-12"></div>
      </div>
      <div className="parent-container-header">
        <div className="payment-header"></div>
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
                        <td className="td-sales">{(allProducts.find(prod => prod.id === item).food).replace("/", "/\n").split("\n").map((line, idx) => (
                          <Fragment key={idx}>
                            {line.trim()}
                            <br />
                          </Fragment>
                        ))}</td>
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
                    onClick={() => dispatch(setShowPayModal(!showPayModal))}>
                    Add Sales
                  </div>
                </td>
              </>}
            </tbody>
          </table>}
        </div>

        <div className="card-body">
          {isEmpty(allProducts) && <Empty />}
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
    </div >
  )
}

export default AddSalesGrid;
