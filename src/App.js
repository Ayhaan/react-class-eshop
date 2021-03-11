import React from 'react';
import Article from './components/Article';
import Panier from './components/Panier';

export default class App extends React.Component {
  state = {
    argent: 20,
    panier: [],
    articles: [       // articles est un tableau qui comporte 3 objets (3 boissons)
      {
        nom: "Coca Cola",
        prix: 1,
        stock: 5,
        lien : "./img/cocacola.png"
      },
      {
        nom: "Fanta",
        prix: 1.5,
        stock: 5,
        lien: "./img/fanta.png"
      },
      {
        nom: "Ice tea",
        prix: 2,
        stock: 5,
        lien: "./img/icetea.png"
      },
    ]
  }
  
  acheter = (i) => {
    let { argent, panier, articles } = this.state;   // c'est façon de décomposer le state et de l'utiliser sans le 'this.state.x'

    if (argent < articles[i].prix || articles[i].stock === 0) {   // vérifie si il assez d'argent et si le stock est dispo
      return null;   
    }
    //Logique js pour la partie Acheter
    argent -= articles[i].prix;
    panier.push(articles[i]);
    articles[i].stock--;

    this.setState({ argent, panier, articles });  // N'oubliez pas de toujours mettre votre state à jours. Sinon aucun changement sera pris en compte !
  } 

  revendre = (i) => {
    let { argent, panier, articles } = this.state;

    // Logique js pour la partie revendre
    argent += panier[i].prix;
    articles[articles.indexOf(panier[i])].stock++;
    panier.splice(i, 1);

    this.setState({ argent, panier, articles })
  }

  render() {
    return (
      <div className="container">
        <h3>Mon argent : {this.state.argent}€</h3>
        <div className="row">
          {this.state.articles.map((el, i) => {
            return (
              <Article key={i} article={el} argent={this.state.argent} acheter={() => this.acheter(i)} />
            )
          })}
        </div>
        <p>Mon panier : </p>
        {this.state.panier.map((el, i) => {
          return (
            <Panier key={i} article={el} revendre={() => this.revendre(i)} />
          )
        })}
      </div>
    )
  }
}
