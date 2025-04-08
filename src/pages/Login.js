import React, {useState} from 'react'
import terraclimelogo from '../Utils/Images/Logo - Website.png';
import { faInstagram, faLinkedin, faMeta, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope, faEye, faEyeDropper, faEyeSlash, faX } from '@fortawesome/free-solid-svg-icons';
function Login() {
  const [formData, setFormData] = useState({
    user_mail: '',
    user_password: '',
  });
  const [inputType, setInputType] = useState('password');
  const [eyeOpen, setEyeOpen] = useState(false)
  const handleEyeOpen = () => {
        setEyeOpen(!eyeOpen)
        setInputType(inputType === 'password' ? 'text' : 'password');
  }
  const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }))
  }
  const handleSubmit = async(e) => {
        e.preventDefault();
        try
        {
                //const result = axios.post('ht')
        }
        catch(err)
        {
            console.log(err)
        }
  }
  return (
    <div className="bg-[#E6FEE9] h-screen">
                <div className="flex justify-center items-center p-2"><img src={terraclimelogo} className="w-[280px]" alt=""/></div>
                <div className="flex justify-center items-center">
                        <div className="w-[30%] pt-[10px]">
                                <div className='bg-white shadow-xl rounded-xl pb-10 t'>
                                            <div className="">
                                                <div className="text-2xl mt-[10px] font-bold pt-7">Welcome</div>
                                                <div className="mt-10">
                                                        <div className="relative">
                                                            <div className='absolute lg:ml-[70px] border p-[9px] border border-b-0 border-t-0 border-l-0 border-[#ffffff]'><FontAwesomeIcon icon={faEnvelope} /></div>
                                                            <input type="text" className="border bg-gray-200 w-[70%] p-2 rounded-xl focus:ring-offset-0 focus:ring-0 focus:outline-none ps-14" placeholder="Enter your username" value={formData.user_mail} onChange={handleChange} name="user_mail"/>
                                                        </div>
                                                        <div className="relative">
                                                                    <div className='absolute lg:ml-[70px] md:ml-[80px] ml-[50px] border p-[9px] border border-b-0 border-t-0 border-l-0 border-[#ffffff]'><button onClick={handleEyeOpen}><FontAwesomeIcon icon={eyeOpen  ? faEye : faEyeSlash} /></button></div>
                                                                    <div className="mt-6 mb-2"><input type={inputType} className="border bg-gray-200 w-[70%] p-2 rounded-xl focus:ring-offset-0 focus:ring-0 focus:outline-none ps-14" placeholder="Enter your password" value={formData.user_password} name="user_password" onChange={handleChange}/></div>
                                                        </div>
                                                </div> 
                                                <div><a href="/forgot-password" className="text-[#00A877] text-sm mt-12">Forgot password?</a></div>
                                                <div className="mb-2 mt-4"><button className="text-white bg-[#00A877] py-2 rounded-xl px-3" onClick={handleSubmit}>Sign in</button></div>
                                                <div className="mt-10">Reach us at</div>
                                                <div className="flex justify-between mx-[110px] mt-3">
                                                            <div className="text-2xl text-[#00A877]"><FontAwesomeIcon icon={faTwitter}/></div>
                                                            <div className="text-2xl text-[#00A877]"><FontAwesomeIcon icon={faInstagram} /></div>
                                                            <div className="text-2xl text-[#00A877]"><a href="https://www.linkedin.com/company/terraclime/"><FontAwesomeIcon icon={faLinkedin} /></a></div>
                                                            <div className="text-2xl text-[#00A877]"><FontAwesomeIcon icon={faMeta} /></div>
                                                </div>
                                            </div>
                                </div>
                                <div className="mt-8"><span><FontAwesomeIcon icon={faCopyright}/> </span>2025 Terraclime. All Rights Reserved.</div>
                        </div>
                </div>
    </div>
  )
}
export default Login