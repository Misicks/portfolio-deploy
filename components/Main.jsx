import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Crear es mi pasión
          </p>
          <h1 className='py-4 text-gray-700'>
            Hola soy <span className='text-[#5651e5]'> Alonso</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Un entusiasta de la tecnología</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Me gusta aprender tecnologías nuevas, y construir con ellas.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
