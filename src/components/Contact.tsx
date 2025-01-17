import React from 'react'
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
       <div className="grid grid-cols-2 gap-10">
  <div className="space-y-8">
    {/* Get in Touch Section */}
    <h2 className="text-5xl">Get in Touch</h2>
    <p className="text-gray-600 text-[18px] pt-2">
      Drop me a line, or give me a call or send me a message by submitting the form below.
    </p>
    <div className="flex items-center space-x-2">
      <FiMail size={20} />
      <span>anoshafatima1995@gmail.com</span>
    </div>
    <div className="flex items-center space-x-2">
      <BsFillTelephoneFill size={20} />
      <span>(+92) 331-111222334</span>
    </div>
  </div>
  <div className="space-y-8">
    {/* Name Section */}
    <div className="flex flex-col gap-1">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="h-[40px] bg-transparent border border-blue-800"
        id="name"
      />
    </div>
    {/* Email Section */}
    <div className="flex flex-col gap-1">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className="h-[40px] bg-transparent border border-blue-800"
        id="email"
      />
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="message">Message</label>
      <textarea
        className="bg-transparent border border-blue-800"
        id="message" rows={8}>
            </textarea>
    </div>
    <button className='bg-blue-900 p-2 px-6'>Submitt</button>
  </div>
</div>
</div>
  )
}

export default Contact