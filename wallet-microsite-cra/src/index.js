import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Root from './components/app/components/Root';
import HowTo from './components/app/components/HowTo';
import SecurityTips from './components/app/components/SecurityTips';
import Help from './components/app/components/Help';
import FAQ from './components/app/components/FAQ';
import TermsAndConditions from './components/app/components/TermsAndConditions';
import PromotionsTermsAndConditions from './components/app/components/PromotionsTermsAndConditions';
import Download from './components/app/components/Download';
import Promotions from './components/app/components/Promotions';

// Optional: Replace with react-ga4 or remove for now
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-84560965-7'); // production

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/how-to" element={<HowTo />} />
      <Route path="/security-tips" element={<SecurityTips />} />
      <Route path="/help" element={<Help />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route
        path="/promotions-terms-and-conditions"
        element={<PromotionsTermsAndConditions />}
      />
      <Route path="/download" element={<Download />} />
      <Route path="/promotions" element={<Promotions />} />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
