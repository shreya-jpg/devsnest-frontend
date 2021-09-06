import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../redux/actions/productActions';
const ProductListing=()=>{
    const products= useSelector((state)=> state);
    const dispatch = useDispatch();
    const fetchProducts= async ()=>{
        const response= await axios.get("https://fakestoreapi.com/products").catch((err)=> {
            console.log("err",err);
        });

        dispatch(setProducts(response.data));
    };
    console.log("products: ",products);

    useEffect(()=>{
        fetchProducts();
    },[]);
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;