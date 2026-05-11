import React from "react";

const CheckoutForm = ({ formData, setFormData, billingDetailsField }) => {
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));
  };
  return (
    <form className="">
      {billingDetailsField.map((f) => (
        <div key={f.label} className="flex flex-col gap-2 mb-6">
          <label className="text-gray-800 text-[16px]" htmlFor={f.name}>
            {f.label}{" "}
            {f.isRequired ? <span className="text-[#DB4444]">*</span> : ""}{" "}
          </label>
          {f.type === "textarea" ? (
            <textarea
              name={f.name}
              id={f.name}
              value={formData[f.name]}
              onChange={handleChange}
              rows="3"
              className="px-3 py-2 border border-gray-300 rounded-sm resize-none focus:border-primary focus:outline-0"
            ></textarea>
          ) : (
            <input
              name={f.name}
              id={f.name}
              value={formData[f.name]}
              onChange={handleChange}
              type={f.type}
              className="px-3 py-2 border border-gray-300 rounded-sm focus:border-primary focus:outline-0"
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default CheckoutForm;
