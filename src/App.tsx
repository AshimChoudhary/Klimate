import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { ThemeProvider } from './context/theme-provider';
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
