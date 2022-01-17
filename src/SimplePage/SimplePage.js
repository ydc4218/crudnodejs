import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Init from './Components/Init';


const SimplePage = () => {
  return (
    <HashRouter>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="btn-group">
            <NavLink to="/" className="btn btn-dark">
              Inicio
            </NavLink>
            <NavLink to="/Formulario" className="btn btn-dark">
              Registro
            </NavLink>
            <NavLink to="/Configuracion" className="btn btn-dark">
              Configuración
            </NavLink>
          </div>
        </div>
      </div>

      <Routes>
      <Route path="/"element={<Init />}>
        </Route>
        <Route path="/Formulario" exact>
        </Route>
        <Route path="/Configuracion" exact></Route>
      </Routes>
    </HashRouter>
  );
};

export default SimplePage;