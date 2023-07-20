import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Produit = () => {
   const[empdata, empdatachange] = useState(null);
   const navigate = useNavigate();
   const [Searchdata, Searchdatachange] = useState("");

   const LoadRead=(id)=>{
        navigate("/produit/read/"+id);
   }
   const LoadUpdate=(id)=>{
        navigate("/produit/update/"+id);
   }

   const handleSearch = (e) =>{
        let value = e.target.value;
        Searchdatachange(value);
    }

   const DeleteFunction=(id)=>{
        if(window.confirm('voulez vous supprimer ce produit?')){
            fetch("http://localhost:8000/produit/" +id, {
                method: "DELETE",
            }).then((res)=>{
                alert('produit supprimer.')
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message)
            })
        }
   }

    useEffect(()=>{
        fetch("http://localhost:8000/produit").then((res) => {
            return res.json();
        }).then((resp) =>{
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>liste des produits </h2>
                </div>
                <div className="card-body">
                <form style={{
                    margin:"auto",
                    padding:"15px",
                    maxWidth:"400px",
                    alignContent:"center",
                }}
                className="d-flex input-group w-auto"
                >
                <input type="text" className="form-control" placeholder="Recherche par nom ..."  onChange={handleSearch}/>
                
                </form>
                    <div className="divbtn">
                        <Link to="produit/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                   <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>Nom</td>
                            <td>Prix_Unitaire</td>
                            <td>Quantité</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {empdata &&
                            empdata
                            .filter(item => {
                                return item.Nom.toLowerCase().includes(Searchdata.toLowerCase())
                            })
                            .map(item =>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.Nom}</td>
                                    <td>{item.Prix_Unitaire}</td>
                                    <td>{item.Quantite}</td>
                                    <td>
                                        <a onClick={()=>{LoadRead(item.id)}} className="btn btn-primary">Read</a>
                                        <a onClick={()=>{LoadUpdate(item.id)}} className="btn btn-success">Update</a>
                                        <a onClick={()=>{DeleteFunction(item.id)}} className="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                   </table>
                </div>
            </div>
        </div>
    );
}
export default Produit;

