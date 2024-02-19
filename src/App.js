import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Header from "./components/Header";
import CarbonFootprintTracker from "./components/CarbonFootprintTracker"; // New component imports
import RenewableEnergyMap from "./components/RenewableEnergyMap"; // New component imports
import ClimateActionChallenges from "./components/ClimateActionChallenges"; // New component imports
import EnvironmentalNews from "./components/EnvironmentalNews"; // New component imports
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  return (
    <Router>
      <div>
        <Header />
        <main className="column">
          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <Routes>
              <Route
                path="/"
                element={
                  !isLoading && !error && !isAuthenticated ? (
                    <LoginButton />
                  ) : (
                    <Navigate to="/profile" replace state={{ from: "/" }} />
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <LogoutButton />
                    <CarbonFootprintTracker />
                    <RenewableEnergyMap />
                    <ClimateActionChallenges />
                    <EnvironmentalNews />
                  </>
                }
              />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;
