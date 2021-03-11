import React from 'react';

export default class Panier extends React.Component {

    render() {
        return (
            <div className="d-flex align-items-center my-2">
                <p className="my-0 mx-2">Produit : {this.props.article.nom}</p>
                <button className="btn btn-danger" onClick={this.props.revendre}>Rendre</button>
            </div>
        )
    }
}
