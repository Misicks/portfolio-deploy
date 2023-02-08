import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alonso</title>
        <meta name='description' content='Soy un entusiasta de la tecnología' />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
