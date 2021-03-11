import React from 'react';

export default class Article extends React.Component {

    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="card">
                    <div className="logo d-flex justify-content-center align-items-center">
                        <img className="card-img-top" src={this.props.article.lien} alt="" />
                    </div>
                                                {/* Pour vérifier le stock, faite une condition ternaire. Sur une ligne on peut vérifier si le sotck est vide ou presque */}
                    <div className={`card-body ${this.props.article.stock === 1 ? "bg-warning" : this.props.article.stock === 0 ? "bg-danger text-white" : ""}`}>
                        <h5 className="card-title">{this.props.article.nom}</h5>
                        <p className="card-text">Prix : {this.props.article.prix}€</p>
                        <p className="card-text">{this.props.article.stock === 0 ? "Rupture de stock" : `Stock : ${this.props.article.stock} unités`}</p>
                        <button onClick={this.props.acheter} className={`btn btn-success ${this.props.article.stock === 0 || this.props.argent < this.props.article.prix ? "d-none" : ""}`}>Acheter</button>
                    </div>
                </div>
            </div>
        )
    }
}
