import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ProduitCreate = () => {
    const[id, idchange] = useState("");
    const[Nom, Nomchange] = useState("");
    const[Prix_Unitaire, Prix_Unitairechange] = useState("");
    const[Quantite, Quantitechange] = useState("");
    const[active, activechange] = useState("true");
    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata={Nom, Prix_Unitaire, Quantite};
        
        fetch("http://localhost:8000/produit", {
            method: "POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(empdata)
        }).then((res)=>{
            alert('Ajout avec succès.')
            navigate('/');
        }).catch((err)=>{
            console.log(err.message)
        })
       // console.log({id, Nom, Prix_Unitaire, Quantite})
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{textAlign:"left"}}>
                            <div className="card-title">
                                <h2>Ajouter un produit</h2>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Nom</label>
                                            <input required value={Nom}  onChange={e=>Nomchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Prix_Unitaire</label>
                                            <input required value={Prix_Unitaire} onChange={e=>Prix_Unitairechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Quantite</label>
                                            <input required value={Quantite} onChange={e=>Quantitechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );

}

export default ProduitCreate;