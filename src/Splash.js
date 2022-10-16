export default function SplashPage () {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center text-white my-3 text-center">
                <h3 className="col-3">Projects</h3>
                <h3 className="col-3">About Me</h3>
                <h3 className="col-3">Blog</h3>
                <h3 className="col-3">Contact Me</h3>
            </div>
            <div className="row justify-content-center align-items-center text-white vh-100 text-center">
                <h1 className="col-12 typewriter">Hello my name is Elijah Wenndt and I am a Full-Stack developer.</h1>
                <div className="col-2 btn btn-primary align-self-start p-3">See my latest project</div>
            </div>
        </div>
    )
}