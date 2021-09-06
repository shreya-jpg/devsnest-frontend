import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
    <Route path="/" exact component={ProductListing}/>
    <Route path="/product/:productId" exact component={ProductDetail}/>
    <Route>404 Not found</Route>
    <ProductListing/>
    </Switch>
    </Router>
    </>
  );
}

export default App;