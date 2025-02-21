/* eslint-disable no-unused-vars */
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/Team";
import Invoices from "./scenes/invoices/Invoices";
import Hydrostatic from "./scenes/hydrostatic/Hydrostatic";
import Bar from "./scenes/bar";
import UserForm from "./scenes/form/Form";
import Line from "./scenes/line/Line";
import Pie from "./scenes/pie/Pie";
import Faq from "./scenes/faq/Faq";
import ValeursInitial from "./scenes/valeursInitial";
import ValeursFinal from "./scenes/valeursFinal";
import Calendar from "./scenes/calendar/Calendar";
import DS from "./scenes/ds";
import DSManualComponent from "./scenes/dsManuel";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/Hydrostatic" element={<Hydrostatic />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/valeursFinal" element={<ValeursFinal />} />
              <Route path="/form" element={<UserForm />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/ds" element={<DS />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/valeursInitial" element={<ValeursInitial />} />
              <Route path="/dsManual" element={<DSManualComponent />} />
            </Routes>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
