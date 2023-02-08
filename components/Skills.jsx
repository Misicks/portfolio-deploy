import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Mongo from '../public/assets/skills/mongo.png';
import Svelte from '../public/assets/skills/svelte.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Arduino from '../public/assets/skills/arduino.png';
import Linux from '../public/assets/skills/linux.png';
import Python from '../public/assets/skills/python.png';
import Csharp from '../public/assets/skills/csharp.png';
import Cpp from '../public/assets/skills/cpp.png';
import C from '../public/assets/skills/c.png';
import Unity from '../public/assets/skills/unity.png';
import Tensorflow from '../public/assets/skills/tensorflow.png';
import Opencv from '../public/assets/skills/opencv.png';
import Flask from '../public/assets/skills/flask.png';
import Express from '../public/assets/skills/express.png';
import Card from './Card'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>Lo que he aprendido</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <Card img={Html} text="Html" />
          <Card img={Css} text="CSS" /> 
          <Card img={Tailwind} text="Tailwind" /> 
          
          <Card img={C} text="C" /> 
          <Card img={Cpp} text="C++" />
          <Card img={Csharp} text="C#" /> 
          <Card img={Unity} text="Unity" /> 
          <Card img={Python} text="Python" /> 
          <Card img={Opencv} text="Open CV" /> 
          <Card img={Tensorflow} text="Tensorflow" /> 
          <Card img={Javascript} text="Javascript" />  
          <Card img={ReactImg} text="React" /> 
          <Card img={NextJS} text="Next.js" /> 
          <Card img={Svelte} text="Svelte" />
          <Card img={Mongo} text="Mongo DB" /> 
          <Card img={Express} text="Express" />
          <Card img={Flask} text="Flask" />
          <Card img={Github} text="Github" /> 
          <Card img={Arduino} text="Arduino" /> 
          <Card img={Linux} text="Linux" /> 
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
