import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>El camino que tomé</h2>
          <p className='py-2 text-gray-600'>
            Desde que era pequeño me ha gustado mucho aprender sobre tecnología. Empeze haciendo legos,
            luego empeze a construir robots en una clase extra de la escuela cuando iba en 4º de promaria.
            Siempre fui muy curioso y pronto los robots de lego me empezaron a aburrir.
            Cuando iba en 6º de primaria quería un Xbox para poder jugar con mis amigos, pero no me lo compraron.
            Yo quería jugar con mis amigos videjuegos y fue entonces que se me occurrio hacer videojuegos para jugarlos
            con mis amigos.
            </p> 
          <p className='py-2 text-gray-600 mb-40'>
            Empezé a buscar sobre como crear videojuegos y me tope con Unity un motor de videojuegos, era bastante complejo,
            y no le entendía a la programación. Entonces decidí aprender primero a programar y luego regresar a Unity. Empezé
            con un curso de programación en python y seguí aprendiendo algunas librerías como "beutifullsoup", "selenium",
            y otras más. Luego empezé a aprender HTML y Css, con estos conceptos empecé a crear algunas páginas web. Después 
            tomé un curso de harvard sobre programación, y seguí con un curso de desarollo web full stack, y recientemente estoy
            tomando un curso sobre React, y otro sobre machinelearning.
          </p>
          
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mb-40'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
