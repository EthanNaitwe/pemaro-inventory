import { DateTime } from "luxon";
import { useSelector } from "react-redux";
import {
  formatOrderNumber,
  sumSalesSubTotal,
} from "../../../../config/helpers/dataHelpers";
import { Fragment, useEffect } from "react";
const ReceiptPreview = () => {
  const { allProducts, clickCounts } = useSelector((state) => state.products);
  const { allSales } = useSelector((state) => state.sales);
  const {
    systemSettings: { storeName, address1, address2 },
  } = useSelector((state) => state.settings);
  let now = DateTime.local();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (
      date.toLocaleDateString("en-US") +
      " " +
      date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    );
  };

  const receiptData = {
    storeName: storeName,
    orderNumber: formatOrderNumber(allSales.length + 1),
    items: [
      { name: "Cappuccino (L)", price: 4.5 },
      { name: "Blueberry Muffin", price: 3.25 },
      { name: "Extra Shot", price: 0.79 },
    ],
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div
        className="receipt-border bg-white p-6 rounded border-2 border-dashed border-gray-300 max-w-xs mx-auto"
        style={{
          fontFamily: "monospace",
          minWidth: 320,
          letterSpacing: "0.01em",
        }}
      >
        <div className="text-center mb-2">
          <div
            className="font-bold text-base mb-1"
            style={{ fontSize: "1rem" }}
          >
            {receiptData.storeName || "DINE & WINE"}
          </div>
          <div className="text-xs" style={{ color: "#757575" }}>
            {address1 || "Ntinda - Kiwatule Road"}
          </div>
          <div className="text-xs" style={{ color: "#757575" }}>
            {address2 || "Kiwatule"}
          </div>
        </div>

        <div
          className="border-t border-b border-gray-300 py-2 my-3"
          style={{ marginTop: 16, marginBottom: 16 }}
        >
          <div className="flex justify-between text-xs">
            <span className="sale-child-l">Order:</span>
            <span className="sale-child-r">{receiptData.orderNumber}</span>
          </div>
          <div
            className="flex justify-between text-xs"
            style={{ marginBottom: 2 }}
          >
            <span className="sale-child-l">Date:</span>
            <span className="sale-child-r">{formatDate(now)}</span>
          </div>
        </div>

        <div className="mb-2" style={{ marginBottom: 18 }}>
          {Object.keys(clickCounts).map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between text-xs"
                style={{ marginBottom: 2 }}
              >
                <span className="sale-child-l">{`${
                  clickCounts[item]
                } ${allProducts
                  .find((prod) => prod.id === item)
                  .food.replace("/", "/\n")
                  .split("\n")
                  .map((line) => line?.trim())}`}</span>
                <span className="sale-child-r">{`UGX ${(
                  allProducts.find((prod) => prod.id === item).minimum_price *
                  clickCounts[item]
                ).toLocaleString()}`}</span>
              </div>
            );
          })}
        </div>

        <div
          className="border-t border-gray-300 pt-2 mt-2"
          style={{ marginTop: 12, paddingTop: 8 }}
        >
          <div className="flex justify-between text-xs mb-1">
            <span className="sale-child-l">Subtotal:</span>
            <span className="sale-child-r">{`UGX ${sumSalesSubTotal(
              allProducts,
              clickCounts
            ).toLocaleString()}`}</span>
          </div>
          <div className="flex justify-between text-xs mb-1">
            <span className="sale-child-l">Tax:</span>
            <span className="sale-child-r">{`UGX 0.00`}</span>
          </div>
          <div
            className="flex justify-between font-bold text-base mt-1"
            style={{
              fontWeight: "bold",
              fontSize: "1.1em",
              marginTop: 8,
            }}
          >
            <span className="sale-child-l">Total:</span>
            <span className="sale-child-r">
              {`UGX ${sumSalesSubTotal(
                allProducts,
                clickCounts
              ).toLocaleString()}`}
            </span>
          </div>
        </div>

        <div
          className="text-center mt-6 text-xs"
          style={{ color: "#757575", marginTop: 24 }}
        >
          <p style={{ marginBottom: 2 }}>Thank you for your business!</p>
          <p style={{ marginTop: 0 }}>Powered by Atom Software</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
