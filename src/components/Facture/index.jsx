import "./style.scss"
import effyisLogo from "../../assets/images/effyisLogo.png"
const Facture = () => {

    return ( 
        <div className="facture-container">
            <div className="elements-container">
                <div className="fac-header">
                    <h1>Facture</h1>
                    <img src={effyisLogo} alt="Logo here" />
                </div>
                <div className="facture-name">
                    <h2>Facture name</h2>
                    <h2>Facture N</h2>
                    <h2>Mode de depo</h2>
                    <h2>Date de Facture</h2>
                    <h2>Date d'Expedite</h2>
                </div>
                <div className="supp-client-infos">
                    <div className="supplier">
                        <h2>Mon Entreprise</h2>
                        <h3>address</h3>
                        <h3>Country</h3>
                        <h3>GLN</h3>
                        <h3>SIRET/SIREN</h3>
                        <h3>N TVA</h3>
                    </div>
                    <div className="client">
                        <h2>Client Entreprise</h2>
                        <h3>address</h3>
                        <h3>Country</h3>
                        <h3>GLN</h3>
                        <h3>SIRET/SIREN</h3>
                        <h3>N TVA</h3>
                    </div>
                    <div className="cadre-de-facturation">
                        <h2>Cadre de la facturation</h2>
                        <h3>Code de cadre de facturation</h3>
                        <h3>Code du Valideur</h3>
                        <h3>Code du service du valideur</h3>
                    </div>
                </div>
                <div className="ref-lignTVA-container">
                    <div className="reference-container">
                        <h2>References</h2>
                        <h3>Devise de Facture</h3>
                        <h3>Type de Facture</h3>
                        <h3>Type de Tva</h3>
                        <h3>Motif d'Exoneration de Tva</h3>
                        <h3>Numero de Marche</h3>
                        <h3>Numero de Bon de Commande</h3>
                        <h3>Numero de Facture Origine</h3>
                        <h3>Mode du Paiement</h3>
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
            </div>
        </div>
     )
}
 
export default Facture
