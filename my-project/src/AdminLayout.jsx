import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Countries from './Countries';
import AddCountry from './AddCountry';
import CountryDetail from './CountryDetail';
import Login from './Login';

const AdminLayout = () => {
    return (
        <div>
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route path="/admin/countries" component={Countries} />
                <Route path="/admin/add-country" component={AddCountry} />
                <Route path="/admin/country-detail/:id" component={CountryDetail} />
                <Route path="/admin/login" component={Login} />
        </div>
    );
}

export default AdminLayout;
