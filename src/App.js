import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Header from "./components/Header";
import CarbonFootprintTracker from "./components/CarbonFootprintTracker";
import RenewableEnergyMap from "./components/RenewableEnergyMap";
import ClimateActionChallenges from "./components/ClimateActionChallenges";
import EnvironmentalNews from "./components/EnvironmentalNews";
import { useAuth0 } from "@auth0/auth0-react";
import CarbonFootprintPage from "./components/CarbonFootprintPage";
import ClimateActionChallengesPage from "./components/ClimateActionChallengesPage";
import EnvironmentalNewsPage from "./components/EnvironmentalNewsPage";
import RenewableEnergyMapPage from "./components/RenewableEnergyMapPage";

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
              <Route path="/carbon-footprint-page" element={<CarbonFootprintPage />} />
              <Route path="/renewable-energy-map-page" element={<RenewableEnergyMapPage />} />
              <Route
                path="/climate-action-challenges-page"
                element={<ClimateActionChallengesPage />}
              />
              <Route path="/environmental-news-page" element={<EnvironmentalNewsPage />} />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;
