import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="py-4" id="footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start">Copyright &copy; Lost Ark Tools 2022</div>
                <div className="col-lg-4 my-3 my-lg-0">
                </div>
                <div className="col-lg-4 text-lg-end">
                    <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                    <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export { Footer };