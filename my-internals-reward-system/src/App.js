import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import StudentManagement from './components/StudentManagement';
import CertificateVerification from './components/CertificateVerification';
import MarksCalculation from './components/MarksCalculation';
import ReportPage from './components/ReportPage';
import SettingsPage from './components/SettingsPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/student-management" component={StudentManagement} />
                <Route path="/certificate-verification" component={CertificateVerification} />
                <Route path="/marks-calculation" component={MarksCalculation} />
                <Route path="/report" component={ReportPage} />
                <Route path="/settings" component={SettingsPage} />
            </Switch>
        </Router>
    );
};

export default App;
