import "./style.scss"
import effyisLogo from "../../assets/images/effyisLogo.png"
import BasicTable from "./table"
const Facture = () => {

    const rows = [{
        lignePosteNumero: 88,
        lignePosteReference: "est",
        lignePosteDenomination: "test",
        lignePosteQuantite: 888,
        lignePosteUnite: "test",
        lignePosteMontantUnitaireHT: 888,
        lignePosteMontantRemiseHT: 888,
        lignePosteTauxTva: 10,
        lignePosteTauxTvaManuel: 888
    },
    {
        lignePosteNumero: 88,
        lignePosteReference: "est",
        lignePosteDenomination: "test",
        lignePosteQuantite: 888,
        lignePosteUnite: "test",
        lignePosteMontantUnitaireHT: 888,
        lignePosteMontantRemiseHT: 888,
        lignePosteTauxTva: 10,
        lignePosteTauxTvaManuel: 888
    }
    ]

    return ( 
        <div className="facture-container">
            <div className="elements-container">
                <div className="fac-header">
                    <h1>Facture</h1>
                    <img src={effyisLogo} alt="Logo here" />
                </div>
                <div className="facture-name">
                    <div className="inputs">
                        <input type="text" />
                        <h2>Facture name</h2>
                    </div>
                    <div className="inputs">
                        <input type="text" />
                        <h2>Facture N</h2>
                    </div>
                    <div className="inputs">
                        <input type="text" />
                        <h2>Mode de depo</h2>
                    </div>
                    <div className="inputs">
                        <input type="text" />
                        <h2>Date de Facture</h2>
                    </div>
                    <div className="inputs">
                        <input type="text" />
                        <h2>Date d'Expedite</h2>
                    </div>
                    
                </div>
                <div className="supp-client-infos">
                    <div className="supplier">
                        <div className="inputs">
                            <input type="text" />
                            <h2>Mon Entreprise</h2>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>address</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Country</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>GLN</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>SIRET/SIREN</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>N TVA</h3>
                        </div>
                    </div>
                    <div className="client">
                        <h2>Client Entreprise</h2>
                        <div className="inputs">
                            <input type="text" />
                            <h3>address</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>N TVA</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>GLN</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>SIRET/SIREN</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>N TVA</h3>
                        </div>
                    </div>
                    <div className="cadre-de-facturation">
                        <h2>Cadre de la facturation</h2>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code de cadre de facturation</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du Valideur</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du service du valideur</h3>
                        </div>
                    </div>
                </div>
                <div className="ref-lignTVA-container">
                    <div className="reference-container">
                        <h2>References</h2>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du Valideur</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du Valideur</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du Valideur</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du Valideur</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du Valideur</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du Valideur</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Code du Valideur</h3>
                        </div>
                        <div className="inputs">
                            <input type="text" />
                            <h3>Mode du Paiement</h3>
                        </div>
                        <h3>Devise de Facture</h3>
                        <h3>Type de Facture</h3>
                        <h3>Type de Tva</h3>
                        <h3>Motif d'Exoneration de Tva</h3>
                        <h3>Numero de Marche</h3>
                        <h3>Numero de Bon de Commande</h3>
                        
                        
                    </div>
                    <div className="ligneT-account-container">
                        <div className="ligneTva-container">
                            <h2>Ligne TVA</h2>
                            <h3>Taux de TVA</h3>
                            <h3>Montant TVA Base Ht Par Taux</h3>
                            <h3>Montant Tva Par Taux</h3>
                            <h3>taux de TVA Manuel</h3>
                        </div>
                        <div className="paiment-container">
                            <h2>Paiment</h2>
                            <h3>Paiment Url </h3>
                            <h3>Montant TVA Base Ht Par Taux</h3>
                            <h3>Montant Tva Par Taux</h3>
                            <h3>taux de TVA Manuel</h3>
                        </div>
                    </div>
                </div>
                <BasicTable rows={rows}/>
            </div>
        </div>
     )
}
 
export default Facture
