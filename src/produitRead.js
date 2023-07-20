import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";

const ProduitRead = () => {
    const {prodid} = useParams();
    const [empdata, empdatachange] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/produit/" +prodid).then((res) => {
            return res.json();
        }).then((resp) =>{
           empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return (
        <div>
            <div className="card" style={{textAlign:"left"}}>
                <div className="card-title">
                    <h2>Detail sur le produit</h2>
                </div>
                <div className="card-body">
                    { empdata &&
                        <div>
                            <h5>L'ID du produit: {empdata.id} </h5>
                            <h5>Nom du produit: {empdata.Nom}</h5>
                            <h5>Prix_Unitaire du produit: {empdata.Prix_Unitaire}</h5>
                            <h5>Quantite du produit: {empdata.Quantite}</h5>
                            <Link className="btn btn-danger" to="/">Retour à la liste des produits</Link>
                        </div>
                    }
                </div>
                    
                    
                    
            </div>
        </div>
    );

}

export default ProduitRead;