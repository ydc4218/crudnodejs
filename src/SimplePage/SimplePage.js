import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Init from './Components/Init';
import Register from './Components/Register';
import '../Style/Style.css';


const SimplePage = () => {
  return (
    <HashRouter>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="btn-group">
            <NavLink to="/" className="btn btn-dark">
              Api
            </NavLink>
            <NavLink to="/Databd" className="btn btn-dark">
              Data BD
            </NavLink>
            <NavLink to="/Register" className="btn btn-dark">
              Registro
            </NavLink>
            <NavLink to="/Setting" className="btn btn-dark">
              Configuración
            </NavLink>
          </div>
        </div>
      </div>

      <Routes>
      <Route path="/" element={<Init />}>
        </Route>
        <Route path="/Register" element={<Register />}>
        </Route>
        <Route path="/Configuracion" exact></Route>
      </Routes>
    </HashRouter>
  );
};

export default SimplePage;