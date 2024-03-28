import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user/UserContext";
import { AlertProvider } from "./context/alert/AlertContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <UserProvider>
        <AlertProvider>
          <div className="flex min-h-screen flex-col justify-between">
            <Navbar title={"Github Recruit"} />
            <main className="container mx-auto px-4 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:name" element={<User />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AlertProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
