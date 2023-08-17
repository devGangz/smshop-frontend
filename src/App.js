import "bootstrap/dist/css/bootstrap.min.css"
// import Header from './/components/1.Header/Header'
// import Content from './/components/2.Content/Content'
// import Footer from './/components/3.Footer/Footer'
import { Routes, Route } from 'react-router-dom'
// import ViewAll from "./components/2.Content/ViewAll"
import LoginForm from "./components/LoginComponent"
import { useEffect } from "react"
import ProductInfor from "./components/4.Product/ProductInfor"
import AddToCart from "./components/4.Product/AddToCart"
import WebFont from "webfontloader"

import HomePage from "./page/homepage"
import ProductsPage from "./page/products"

import AddToCartPage from './page/addtocart'
import NumberSL from "./components/1.Header/numberSP"
import AddNumberProduct from "./components/countNumber"

import CheckOutPage from "./page/checkOutPage"
import OrderSuccessPage from "./page/orderSuccessPage"

import SearchResultPage from "./page/searchResultPage"

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Montserrat', 'poppin']
            }
        })
    }, [])
    let products = JSON.parse(localStorage.getItem('products')) || []
    localStorage.setItem("products", JSON.stringify(products))
    //localStorage.removeItem("productsResult")
    return (

        <div className="App">
            <Routes>
                <Route path='/' exact element={<HomePage />}></Route>
                <Route path='/login' exact element={<LoginForm />}></Route>
                <Route path='/products' exact element={<ProductsPage />}></Route>
                <Route path='/products/:idproduct/:nameproduct' exact element={<ProductInfor />}></Route>
                <Route path='/cart' exact element={<AddToCartPage />}></Route>
                <Route path='/thanhtoan' exact element={<CheckOutPage />}></Route>
                <Route path='/ordersuccess' exact element={<OrderSuccessPage />}></Route>
                <Route path='/resultsearch' exact element={<SearchResultPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
