import React from 'react';
import Headers from '../Headers/Headers';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AllProducts from '../AllProducts/AllProducts';
import AddProducts from '../AddProducts/AddProducts'
import Login from '../Login/Login';
import Orders from '../Orders/Orders';
import { createContext, useState } from 'react';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Admin from '../Admin/Admin';
import ManageProducts from '../ManageProducts/ManageProducts';
export const UserContext = createContext();
export const cartContext = createContext();
const Home = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [cart, setCart] = useState([]);
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <cartContext.Provider value={[cart, setCart]}>
                
                <Router>
                    <Headers />
                    <Switch>

                        <Route path="/allProducts">
                            <AllProducts />
                        </Route>

                        <PrivateRoute path="/orders">
                            <Orders />
                        </PrivateRoute>

                        <PrivateRoute path="/admin">
                            <Admin />
                        </PrivateRoute>

                        <PrivateRoute path="/addProducts">
                            <AddProducts />
                        </PrivateRoute>

                        <PrivateRoute path="/manageProducts">
                            <ManageProducts />
                        </PrivateRoute>

                        <Route path="/login">
                            <Login />
                        </Route>

                        <Route exact path="/">
                            <AllProducts />
                        </Route>

                        <Route path="*">
                            <h1>Not found</h1>
                        </Route>

                    </Switch>
                </Router>
            </cartContext.Provider>
        </UserContext.Provider>
    );
};

export default Home;