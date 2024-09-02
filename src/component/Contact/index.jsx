import { useState } from 'react'
import Section from '../Section'
import FormInput from '../FormInput'


const inputField = [
    {
        id: 1,
        type: 'text',
        placeholder: 'Name',
        name: 'username',
        required: true,
        pattern: "^[A-Za-z]{3,16}$",
        errorMessage: 'Username should be 3-16 charactor and should not include any special charactor',
        autocomplete: 'off',
    },
    {
        id: 2,
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        required: true,
        autocomplete: 'off',
        errorMessage: 'It Should be valid email Address'
    },
    {
        id: 3,
        type: 'text',
        placeholder: 'Phone',
        name: 'number',
        required: true,
        autocomplete: 'off',
    },
    {
        id: 4,
        type: 'text',
        placeholder: 'Subject',
        name: 'subject',
        required: true,
        autocomplete: 'off',
    },
    {
        id: 5,
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        required: true,
        autocomplete: 'off',
        errorMessage: '8-16 characters, at least one uppercase letter, one lowercase letter, one number and one special character $ % # * & -',
        pattern: `^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}$`,
    },
    {
        id: 6,
        type: 'password',
        placeholder: 'Confirm Password',
        name: 'confirmPassword',
        required: true,
        autocomplete: 'off',
        errorMessage: "password should be match",
        // pattern: values.password,    // Confirm Password match code not Run
    },


]
const Contact = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        number: "",
        subject: "",
        password: "",
        confirmpassword: "",
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(e.target.value)

    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Section id='contact' bgColor='' title='Any Question? Feel Free to Contact'>
            <div className=" mx-auto  mt-[75px]">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* <!-- Contact Info --> */}
                    <div className="bg-gray-primary text-gray-300 p-[30px] rounded-lg  w-[355px]">
                        <p className="mb-4 leading-[34px] text-text-clr-pirmary font-medium text-[22px]">
                            I would be happy to answer any questions you may have about freelance writing or content marketing!
                        </p>
                        <div className="flex items-center mb-[15px]">
                            <span className="text-yellow-500">
                                {/* <!-- Phone Icon --> */}
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                            </span>
                            <span className='text-white ml-[15px]'>+91 1234567891</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-yellow-500">
                                {/* <!-- Email Icon --> */}
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                            </span>
                            <span className='text-white ml-[15px]'>example@gmail.com</span>
                        </div>
                    </div>

                    {/* <!-- Contact Form --> */}
                    <div className='flex-1'>
                        <form onSubmit={handleSubmit}>
                            <div className=" grid grid-cols-2 gap-5 mb-[20px]">
                                {
                                    inputField.map((item) => (
                                        <FormInput key={item.id} {...item} onChange={onChange}
                                            value={values[item.name]}
                                        />
                                    ))
                                }
                            </div>
                            <textarea placeholder="Your message" name='yourmessage' rows={3} className="bg-transparent px-5 py-[10px] rounded-md text-white outline-none focus:ring-1 focus:ring-white border-border-gray border text-lg w-full"></textarea>
                            <button type="submit" className="bg-white text-black-primary py-3 px-4 rounded-md font-medium text-lg mt-5">Submit</button>
                        </form>


                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Contact






