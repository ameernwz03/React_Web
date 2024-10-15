import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-white bg-black'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='youtube' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='light' icon='futbol' className='me-3' />
                Juventus
              </h6>
              <p>
                Juventus is more than a football club; it's a legacy of passion, excellence, and unwavering spirit. Join us in celebrating the black and white stripes that unite millions worldwide.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Jerseys
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Training Gear
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Accessories
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Memorabilia
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Team
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  News
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Fan Zone
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='light' icon='home' className='me-2' />
                Via Druento, 175, 10151 Turin, Italy
              </p>
              <p>
                <MDBIcon color='light' icon='envelope' className='me-3' />
                info@juventus.com
              </p>
              <p>
                <MDBIcon color='light' icon='phone' className='me-3' /> + 39 011 45 30 486
              </p>
              <p>
                <MDBIcon color='light' icon='print' className='me-3' /> + 39 011 45 30 111
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <hr/>
      <div className='text-center p-2'>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://www.juventus.com/en/'>
          Juventus.com
        </a>
      </div>
    </MDBFooter>
  );
}