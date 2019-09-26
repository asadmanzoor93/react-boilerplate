import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './assets/sass/style.scss';

import { history } from './helpers';

import Login from './pages/login/index';
import Dashboard from './pages/dashboard/index';
import Users from './pages/users/index';
import Insights from './pages/insights/index';
import Pricing from './pages/pricing/index';
import Settings from './pages/settings/index';
import Help from './pages/help/index';

import Header from './components/header/index';
import Footer from './components/footer/index';
import SideBar from './components/sidebar/index.jsx';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <main>
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <SideBar />
            </Col>
            <Col md={10}>
              <main className="main-content p-3">
                <Route exact path="/" component={Dashboard} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/insights" component={Insights} />
                <Route path="/settings" component={Settings} />
                <Route path="/help" component={Help} />
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
              </main>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
