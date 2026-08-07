import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
import backgroundImage from "./assets/image.png";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-8 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="w-full rounded-3xl border border-white/20 bg-black/40 backdrop-blur-2xl p-5 sm:p-7 shadow-2xl"
        >
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Currency Converter
            </h1>

            <p className="mt-2 text-sm sm:text-base text-white/60">
              Convert currencies quickly and easily
            </p>
          </div>

          {/* From Input */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChnage={(amount) => setAmount(amount)}
            className="bg-white/95 shadow-lg ring-1 ring-black/5"
          />

          {/* Swap Button Area */}
          <div className="relative h-8 w-full">
            <button
              type="button"
              onClick={swap}
              className="
                absolute
                z-20
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border-4
                border-slate-900/70
                bg-blue-600
                px-5
                py-2
                text-sm
                font-semibold
                text-white
                shadow-xl
                hover:bg-blue-500
                hover:scale-105
                active:scale-95
                transition-all
                duration-200 
              "
            >
              ⇅ Swap
            </button>
          </div>

          {/* To Input */}
          <div className="w-full mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              className="bg-white/95 shadow-lg ring-1 ring-black/5"
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="
              w-full
              rounded-2xl
              bg-linear-to-r
              from-blue-600
              to-indigo-600
              px-4
              py-4
              text-lg
              font-semibold
              text-white
              shadow-lg
              shadow-blue-600/30
              hover:from-blue-500
              hover:to-indigo-500
              hover:-translate-y-0.5
              hover:shadow-xl
              active:translate-y-0
              transition-all
              duration-200
            "
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>

          {/* Footer text */}
          <p className="mt-5 text-center text-xs text-white/40">
            Live exchange rates • Simple & fast conversion
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
