import "./jumbotron.css"


const Jumbotron = () => {
    return (
        <div className="jumbotron bg-body-secondary container jumbo-main mb-4">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
            It uses utility classes for typography and spacing to space content out
            within the larger container.
        </p>
        <p className="lead">
            <a className="btn btn-success btn-lg" href="#" role="button">
            Call to Action!
            </a>
        </p>
        </div>
    );
};

export default Jumbotron;
