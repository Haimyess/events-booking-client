/** @format */

function footer() {
  return (
    <>
      <footer className='text-center text-lg-start bg-light text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-google'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </section>

        <section className=''>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <i className='fas fa-gem me-3'></i>Outland life
                </h6>
                <p>
                  Find what to do in your area in just one place and others earn
                  by doing it.
                </p>
              </div>

              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Events
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Workshops
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Sports
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Night life
                  </a>
                </p>
              </div>

              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </div>

              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <i className='fas fa-home me-3'></i>Tel Aviv, Israel
                </p>
                <p>
                  <i className='fas fa-envelope me-3'></i>
                  contact@outlandlife.com
                </p>
                <p>
                  <i className='fas fa-phone me-3'></i> + 01 234 567 88
                </p>
                <p>
                  <i className='fas fa-print me-3'></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className='text-center p-4'
          // style='background-color: rgba(0, 0, 0, 0.05);'>
        >
          © 2022 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            Gyngee
          </a>
        </div>
      </footer>
    </>
  );
}

export default footer;
