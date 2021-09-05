import './App.css';
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import ToggleTheme from './components/ToggleTheme';
import { useSelector } from 'react-redux';
function App() {
  const theme = useSelector((state)=> state.theme);
  return (
    <div className={theme? "App dark":"App"}>
    <ToggleTheme/>
    <Form/>
    <WeatherCard/>
    </div>
  );
}

export default App;