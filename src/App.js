import "bootstrap/dist/css/bootstrap.min.css"
// import Header from './/components/1.Header/Header'
// import Content from './/components/2.Content/Content'
// import Footer from './/components/3.Footer/Footer'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
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
                <Route exact path='/smshop-frontend' element={<HomePage />}></Route>
                <Route exact path='/smshop-frontend/login' element={<LoginForm />}></Route>
                <Route exact path='/smshop-frontend/products' element={<ProductsPage />}></Route>
                <Route exact path='/smshop-frontend/products/:idproduct/:nameproduct' element={<ProductInfor />}></Route>
                <Route exact path='/smshop-frontend/cart' element={<AddToCartPage />}></Route>
                <Route exact path='/smshop-frontend/thanhtoan' element={<CheckOutPage />}></Route>
                <Route exact path='/smshop-frontend/ordersuccess' element={<OrderSuccessPage />}></Route>
                <Route exact path='/smshop-frontend/resultsearch' element={<SearchResultPage />}></Route>
            </Routes>



        </div>
    );
}

export default App;
