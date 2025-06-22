const ReceiptPreview = () => {
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
    storeName: "SQUARE COFFEE SHOP",
    orderNumber: "#12345",
    customer: "John Doe",
    date: "6/22/2025 3:00 AM",
    items: [{
        name: "Cappuccino (L)",
        price: 3.0,
      }, {
        name: "Blueberry Muffin",
        price: 3.0,
      }, {
        name: "Croissant",
        price: 3.0,
    }],
  };
  const subtotal = 3;
  const tax = 3;
  const total = 3;

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="bg-white p-6 rounded border-2 border-dashed border-gray-300 thermal-receipt text-sm max-w-xs mx-auto">
        <div className="text-center mb-4">
          <h4 className="font-bold text-base">
            {receiptData.storeName.toUpperCase()}
          </h4>
          <p className="text-xs text-[#757575]">123 Main Street</p>
          <p className="text-xs text-[#757575]">City, ST 12345</p>
        </div>

        <div className="border-t border-b border-gray-300 py-2 my-4">
          <div className="flex justify-between text-xs">
            <span>Order:</span>
            <span>{receiptData.orderNumber}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Date:</span>
            <span>{formatDate(receiptData.date)}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Customer:</span>
            <span>{receiptData.customer}</span>
          </div>
        </div>

        <div className="space-y-1 mb-4">
          {receiptData.items.map((item, index) => (
            <div key={index} className="flex justify-between text-xs">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-2">
          <div className="flex justify-between text-xs mb-1">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xs mb-1">
            <span>Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-sm">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center mt-4 text-xs text-[#757575]">
          <p>Thank you for your business!</p>
          <p>Powered by Square</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
