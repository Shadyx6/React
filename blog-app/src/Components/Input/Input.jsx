import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    className = "",
    ...props

},ref) {
    const id = useId()

    return (
        <div className="w-full">
            {label && <label className='inline-block mb-1 mr-3' htmlFor={id}>{label} :</label>}
            <input className={`${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div> 
    
    )
})

export default Input