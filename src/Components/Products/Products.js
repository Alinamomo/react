import React, { useEffect } from 'react'
//import Products from '../ProductsCreate/ProductsCreate'
import './Style.css'
const Products = ({ user, products, setProducts }) => {
    useEffect(() => {
    const getProducts = async () => {
    const requestOptions = {
    method: "GET"
    }
    return await fetch("api/Products", requestOptions)
    
    .then(response => response.json())
    .then(
    (data) => {
    console.log('Data:', data)
    setProducts(data)
    },
    (error) => {
    console.log(error)
    }
    )
    }
    getProducts()
    }, [setProducts])

    const deleteItem = async ({ id }) => {
        const requestOptions = {
        method: "DELETE"
        }
        return await fetch(`/api/Products/${id}`,
        requestOptions)
        
        .then((response) => {
        if (response.ok) {
        removeProducts(id);
        }
        },
        (error) => console.log(error)
        )
        }

    return (
        <React.Fragment>
        <h3>Товары: </h3>
        {products.map(({ id, name, id_acc, id_constr, Price }) => (
        <div className="Products" key={id} id={id} >
        </div>
        ))}
        </React.Fragment>
        )
        }
        export default Products