import React from 'react';
import AboutImg from '../assets/about.png';
const About = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-4 fw-bold mb-4" style={{ color: '#000' }}>About Juventus</h2>
            <p className="lead mb-4" style={{ color: '#333' }}>
              Juventus Football Club, colloquially known as Juve, is a professional football club based in Turin, Piedmont, Italy, that competes in the Serie A, the top flight of Italian football.
            </p>
            <p className="mb-4" style={{ color: '#555' }}>
              Founded in 1897, Juventus has won 36 official league titles, 14 Coppa Italia titles, and eight Supercoppa Italiana titles, being the record holder for all these competitions; two Intercontinental Cups, two European Cups / UEFA Champions Leagues, one European Cup Winners' Cup, a joint national record of three UEFA Cups, two UEFA Super Cups and a joint national record of one UEFA Intertoto Cup.
            </p>
            <button className="btn btn-dark btn-lg">Learn More</button>
          </div>
          <div className="col-lg-6">
            <img 
              src={AboutImg} 
              alt="Juventus Stadium" 
              className="img-fluid rounded shadow"
              style={{ width: '90%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
