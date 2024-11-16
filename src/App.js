import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';
import Scrolltotop from './Components/Scrolltotop';

export const org_name = 'Tu2minis Global';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Scrolltotop />
                <Navbar />
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route eaxct path={'*'} element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
