import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Mines from '../public/assets/projects/mines.png';
import Pokedex from '../public/assets/projects/pokedex.png'
import Tictac from '../public/assets/projects/tictac.png'
import fisicos from '../public/assets/projects/fisicos.jpeg'
import Aerobote from '../public/assets/projects/aerobote.jpeg'
import Lidera from '../public/assets/projects/lidera.jpeg'
import EcoRacing from '../public/assets/projects/ecoracing.jpeg'
import Salsa from '../public/assets/projects/salsa.jpeg'
import Crud from '../public/assets/projects/crud.png'
import Handslator from '../public/assets/projects/handslator.png'
import Qrcode from '../public/assets/projects/qrcode.png'
import Concurso from '../public/assets/projects/concursoanahuac.jpeg'
import RetroRun from '../public/assets/projects/retrorun.png'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import Unity from '../public/assets/skills/unity.png';

const Projects = () => {
  /*
  mis proyectos:
  buscaminas
  gato
  crud express 
  pokedex 
  RetroRun
  lidera programación
  lidera robots físicos
  rocketship
  aerobotes
  ecoRacing
  robot itam
  concurso contra los de la universidad
  Handslator
  */
  return (
    <div id='projects' className='w-full mt-20'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>Mis proyectos más importantes</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Handslator'
            backgroundImg={Handslator}
            tech='React, Flask, Tensorflow, OpenCV'
            description="Es una PWA (Progresive Web App) que traduce el lenguaje de señas a texto. Para el algorítmo de traducción se hizo un modelo de Machine Learnig con Tensorflow."
          />
          <ProjectItem
            title='Buscaminas de Emojis'
            backgroundImg={Mines}
            tech='Desarrollada con Svelte'
            description="Es un juego de buscaminas pero con la diferencia que los números son sustituidos con emojis. Primero fue una página web y luego se convitió en app para android"
          />
          <ProjectItem
            title='Gato'
            backgroundImg={Tictac}
            tech='Desarrollada con Svelte'
            description="Es un juego de gato que detecta quien gana automáticamente, se hizo de la misma manera que el buscaminas.Primero fue una página web y luego se convitió en app para android"

          />
          <ProjectItem
            title='Servidor CRUD con Express'
            backgroundImg={Crud}
            tech='Desarrollado con Expres, Mongo DB'
            description="Este proyecto es un servidor que se conecta con una base de datos y permite hacer modificaciones a los datos que la base de datos almacena"

          />
          <ProjectItem
            title='Pokedex'
            backgroundImg={Pokedex}
            tech='Desarrollada con Svltekit'
            description="Este proyecto es un sitio web el cual contiene información sobre todos los pokemones de primera generación. Cuenta con una página informativa por pokemon"

          />
          <ProjectItem
            title='Generador de codigos QR'
            backgroundImg={Qrcode}
            tech='Desarrollado con React y Electron'
            description="Es una applicación para mac que genera un código QR de cualquier texto. La interfaz gráfica se desarrollo en React, como página web, con electron se convierte en app de escritorio."

          />
          <ProjectItem
            title='Rocket Run'
            backgroundImg={RetroRun}
            tech='Unity'
            description="Es un videojuego 3D de una nave que tiene que esquivar obstáculos (parecido a flappy bird). Los modelos 3D fueron diseñados desde cero."

          />
          <ProjectItem
            title='Concurso robótica Itam'
            backgroundImg={Salsa}
            tech='Robot Arduino con sp-32'
            description="Fue un concurso en el cual construimos un robot desde cero, empezando por el modelo 3D y terminando con un concurso el cual ganamos. El en el concurso el robot debía resolver 2 laberintos uno con ayuda y otro controlado por Bluetooth. El concurso lo logramos ganar."
          />

          <ProjectItem
            title='LiderA robots físicos'
            backgroundImg={fisicos}
            tech="VexCode 5"
            description="Para este concurso de lidera contruimos un escenario desde cero, en el cual se resolvieron dos escenarios con dos robots Vex simultáneos"

          />
          <ProjectItem
            title='LiderA Programación'
            backgroundImg={Lidera}
            tech='Miranda'
            description="Enste fue un concurso de lidera virtual, en el cual usamos un simulador de robots programados en bloques llamado miranda."
          />
          <ProjectItem
            title='Aerobotes'
            backgroundImg={Aerobote}
            tech='Areobote con helice, motor, switch y una batería'
            description="Construímos un aerobote con madera y un circuito, lo hicimos en el campus sur de la Anáhuac. El bote fue rápido logrando ser de los más rápidos del concurso. "
          />
          <ProjectItem
            title='EcoRacing concurso UP'
            backgroundImg={EcoRacing}
            tech='Análisi hecho con Tracker'
            description="Coche de botellas con botellas y materiales reciclados el cual era prpulsado por una helice. Primero se hizo un análisis del movimiento rectilineo uniforme del coche y despues una carrera entre los coches el cual logré ganar."

          />
          <ProjectItem
            title='Concurso contra la Universidad Anáhuac'
            backgroundImg={Concurso}
            tech='Robóts Vex'
            description="Fue un concurso amistoso entre la prepa Anáhuac y la universidad. Contó con diversos retos que ponían a prueba tanto los robots como la habilidad para programar y resolver los escenarios. Al final ganamos la competencia."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
