import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const AnimatedIcon = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
                <a
                  className="flex justify-around items-center w-full text-gray-300"
                  href="#"
                >
                  Linkedin <FaLinkedinIn size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]">
                <a
                  className="flex justify-around items-center w-full text-gray-300"
                  href="#"
                >
                  Github <FaGithub size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]">
                <a
                  className="flex justify-around items-center w-full text-gray-300"
                  href="#"
                >
                  Email <AiOutlineMail size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]">
                <a
                  className="flex justify-around items-center w-full text-gray-300"
                  href="#"
                >
                  Resume <BsFillPersonFill size={30} />
                </a>
              </li>
            </ul>
          </div>
  )
}

export default AnimatedIcon