import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Countries from './Countries';
import CountryDetail from './CountryDetail';
import About from './About';
import Contact from './Contact';

const ClientLayout = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/countries" component={Countries} />
                <Route path="/country-detail/:id" component={CountryDetail} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    );
}

export default ClientLayout;
