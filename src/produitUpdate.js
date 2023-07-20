import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProduitUpdate = () => {
    const {prodid} = useParams();
    //const [empdata, empdatachange] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/produit/" +prodid).then((res) => {
            return res.json();
        }).then((resp) =>{
            idchange(resp.id);
            Nomchange(resp.Nom);
            Prix_Unitairechange(resp.Prix_Unitaire);
            Quantitechange(resp.Quantite);
            activechange(resp.active);
        }).catch((err) => {
            console.log(err.message);
        })

    }, []);


   const[id, idchange] = useState("");
    const[Nom, Nomchange] = useState("");
    const[Prix_Unitaire, Prix_Unitairechange] = useState("");
    const[Quantite, Quantitechange] = useState("");
    const[active, activechange] = useState("true");
    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata={id, Nom, Prix_Unitaire, Quantite};
        
        fetch("http://localhost:8000/produit/" +prodid, {
            method: "PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(empdata)
        }).then((res)=>{
            alert('mise à jour avec succès.')
            navigate('/');
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{textAlign:"left"}}>
                            <div className="card-title">
                                <h2>Mettre à jour  le produit</h2>
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

export default ProduitUpdate;