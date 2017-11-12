import React, { Component } from 'react';
import './Accueil.css';

class Accueil extends Component {

    render () {
        return (
            <div className="container">
                <div className="col-xs-12">
                    <div className="MainText">
                        <span>LE GRIFFE SE PRODUIT TOUS LES 2èmes JEUDI DU MOIS</span><br /><br />
                        <span><b>AU SOLEIL DE LA BUTE</b>, 32 RUE MULLER, 75018 Paris   (M°) ANVERS OU BARBES</span><br />
                        <span><b>ENTREE GRATUITE</b>, CONSO OBLIGATOIRE. POSSIBILITE DE BOIRE ET MANGER SUR PLACE. </span><br />
                        <br />
                        <span><b>Au programme : on ne sait pas, tout est improvisé !</b></span><br />
                        <br />
                        <span><i>1h30 de spectacle surprenant, car avec 5 joueurs tout peut arriver ! Sur les thèmes que vous aurez écrits, les joueurs inventeront sous vos yeux des histoires que vous n&apos;
                            aurez jamais vu auparavant. </i></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accueil;
