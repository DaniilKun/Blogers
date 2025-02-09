import './error.css'

const ErrorPage = () => {
  return (
<section id="not-found" style={{paddingTop:'200px'}}>
    <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
    <div className="circles">
      <p>404<br/>
       <small>PAGE NOT FOUND</small>
      </p>
      <span className="circle big"></span>
      <span className="circle med"></span>
      <span className="circle small"></span>
    </div>
  </section>
  )
}

export default ErrorPage