import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { ThemeProvider } from './components/context/theme-provider';
import WeatherDashBoard from './Pages/WeatherDashBoard';
import Citypage from './Pages/city-page';
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashBoard />} />
            <Route path="/city/:cityName" element={<Citypage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
