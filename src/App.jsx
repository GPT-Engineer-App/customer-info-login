import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerInfo from "./pages/CustomerInfo.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/customer-info" element={<CustomerInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
