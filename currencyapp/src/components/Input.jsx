import React, {useId} from "react";

function Input({
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        SelectedCurrency = 'usd',
        currencyOption = [],
        amountDisabled = false,
        currencyDisabled = false,
        className = '',
    })  {

        const id = useId()
        return (
                <div className={` h-fit p-6 items-center rounded-lg text-sm flex py-4`}>
                    <div className="box w-1/2 flex flex-col gap-3 bg-white p-2 rounded-tl-md rounded-bl-md">
                <label className=" text-gray-500" htmlFor="{id}">{label}</label>
                <input type="number" 
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(e.target.value)
                }
                disabled={amountDisabled}
                className={` p-2 border-none text-xl rounded-lg arrow-hide`}
                placeholder="Amount"
                 />
                    </div>
                    <div className="box w-1/2 flex rounded-tr-md rounded-br-md flex-col bg-white p-2 justify-between gap-5 items-end">
                        <p className=" inline-block  text-gray-500">Currency Type</p>
                        <select name="currency"
                            value={SelectedCurrency}
                            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            disabled={currencyDisabled}
                            className=" bg-slate-200 p-2 rounded-lg w-1/3 justify-end "

                        >
                        {currencyOption.map((currency) => {
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
    
export default Input