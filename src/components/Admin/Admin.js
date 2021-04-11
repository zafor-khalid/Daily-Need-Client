import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
const Admin = () => {
    return (
        <div>
            <ul>
                <li><Link to='/addProducts' style={{color:'green'}}>AddProducts</Link></li>
                <li><Link to="/manageProducts" style={{color:'green'}}>Manage Products</Link></li>
                <li><Link to="" style={{color:'green'}}>Edit Products</Link></li>
            </ul>
        </div>
    );
};

export default Admin;