import { useState } from "react"

const FormInput = ({onChange,errorMessage, ...otherInput }) => {
    const [focused, setFocused] = useState(false)
    return (

        <>
            <div className="flex flex-col">
                <input {...otherInput} 
                onChange={onChange} 
                onBlur={()=> setFocused(true)}
                focused= {focused.toString()}
                className=" contact-form bg-transparent px-5 py-[10px] h-[57px] rounded-md text-white outline-none focus:ring-1 focus:ring-white border-border-gray border text-lg"
                />
                <span className="text-red-500 text-sm leading-5 mt-2 hidden errorMessage focus:invalid:ring-pink-500">{errorMessage}</span>
            </div>
               
        </>
    )
}
export default FormInput