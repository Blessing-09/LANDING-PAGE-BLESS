import "./Card.css";
import Rigo from "/src/img/rigo-baby.jpg";

const Card = () => {
return (
    <div className="container p-0 ">
    <div className="row gy-3">
        
            <CardArea />
        
        
            <CardArea />
        
        
            <CardArea />
        
        
            <CardArea />
        
    </div>
    </div>
);
};

function CardArea() {
return (
    <div className="col-sm-12 col-lg-3">
        <div className="card card-box">
        <img src={Rigo} className="card-img-top img-fluid img-rigo" alt="..." />
        <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </p>
            <a href="#" className="btn btn-success">
            Go somewhere
            </a>
        </div>
        </div>
    </div>
);
}

export default Card;
