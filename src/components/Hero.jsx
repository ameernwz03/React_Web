import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="container-fluid py-5 bg-light d-flex justify-content-center align-items-center " style={{ minHeight: '70vh' }}>
        <div className="row mx-5">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start pe-5">
            <h1 className="display-4 fw-bold mb-3 text-black">Welcome to Juventus Football Club</h1>
            <h4 className="text-muted mb-4">Discover the passion, history, and glory of Italy's most successful team</h4>
            <p className="lead mb-4">Join us in celebrating over a century of excellence, from our legendary players to our iconic black and white stripes.</p>
            <button className="btn btn-dark btn-lg px-4 py-2">Explore More</button>
          </div>
          <div className="col-lg-5">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3rvV6opfGuf7lhyZTzOvyTLe21n0a2xnQA&s" 
              alt="hero-image" 
              className="img-fluid rounded shadow-lg"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero