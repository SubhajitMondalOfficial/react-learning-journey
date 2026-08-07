import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChnage,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`
        bg-white/95
        backdrop-blur-sm
        p-4
        sm:p-5
        rounded-2xl
        text-sm
        flex
        gap-4
        shadow-lg
        transition-all
        duration-300
        hover:shadow-xl
        ${className}
      `}
    >
      {/* Amount Section */}
      <div className="w-1/2 flex flex-col justify-between">
        <label
          htmlFor={amountInputId}
          className="text-slate-500 mb-2 inline-block text-sm font-medium"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="
            outline-none
            w-full
            bg-transparent
            py-2
            text-2xl
            font-semibold
            text-slate-900
            placeholder:text-slate-400
          "
          type="number"
          placeholder="Amount" 
          value={amount}
          onChange={(e) =>
            onAmountChnage && onAmountChnage(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Section */}
      <div className="w-1/2 flex flex-col items-end justify-between text-right">
        <p className="text-slate-500 mb-2 w-full text-sm font-medium">
          Currency Type
        </p>

        <select
          className="
            rounded-xl
            px-4
            py-3
            bg-slate-100
            text-slate-800
            font-semibold
            cursor-pointer
            outline-none
            border
            border-slate-200
            hover:bg-slate-200
            focus:ring-2
            focus:ring-blue-500
            transition-all
            duration-200
          "
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
