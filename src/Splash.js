export default function SplashPage () {
    const el = document.getElementById('load');
    setTimeout(() => {
        el.style.visibility = 'visible';
      
        
      }, 4000);
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center text-white mt-2 text-center position-relative mono">
                <h3 className="col-3 hover fw-bold">Projects</h3>
                <h3 className="col-3 hover fw-bold">About Me</h3>
                <h3 className="col-3 hover fw-bold">Blog</h3>
                <h3 className="col-3 hover fw-bold">Contact Me</h3>
            </div>
            <div className="row justify-content-center align-items-center text-white text-center vh-100">
                <h2 className="col-12 typewriter fw-bold">My name is Elijah Wenndt and I am a Full-Stack developer.</h2>
                <div className="col-2 btn btn-primary align-self-start fade-in delay mono fw-bold">Contact Me!</div>
            </div>
        </div>
    )
}