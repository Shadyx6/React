import React from "react";
import { useId } from "react";

function Select({ className, label, options, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}></label>}
      <select className={`rounded-lg w-full  ${className}`} {...props}>
        {options?.map((option) => (
          <option key={option} value={option} >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
