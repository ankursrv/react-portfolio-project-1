const FormInput = ({onChange, ...otherInput }) => {
    return (

        <>
            <input {...otherInput} onChange={onChange} className="bg-transparent px-5 py-[10px] h-[57px] rounded-md text-white outline-none focus:ring-1 focus:ring-white border-border-gray border text-lg"
               
            />
        </>
    )
}
export default FormInput