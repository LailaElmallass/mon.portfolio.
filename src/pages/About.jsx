import '../styles/about.css';
import CV from '../assets/Laila El mallass CV.pdf';


const About = () => {
  return (
    <section className="about">
      <div className='about-container'>
        <h2><i className='fa fa-user'></i> À Propos de Moi</h2>
        <hr className='hr-about'/>
        <p>
          Bonjour ! Je suis <span>Laila</span>, une développeuse passionnée spécialisée dans la création 
          d'applications web modernes et fonctionnelles. Étudiante en développement web Full-Stack, 
          je me concentre sur des technologies comme <span>React, Redux Toolkit, Node.js, MongoDB, Laravel et MySQL</span>. 
          J'aime relever des défis techniques et concevoir des solutions intuitives et performantes.
        </p>
        <hr className='hr-about'/>
        <h3>Compétences Clés</h3>
        <div className='core-skills'>
          <span>React</span>
          <span>Redux Toolkit</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
          <span>PHP</span>
          <span>Python</span>
          <span>MySQL</span>
          <span>CSS / Tailwind CSS / Bootstrap</span>
          <span>Laravel</span>
        </div>

        <div className='resume-btn'>
          <p>Vous voulez en savoir plus sur moi ?</p>
          <a
            href={CV}
            download
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};


export default About;