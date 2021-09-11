import { Route, Switch, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Switch>
        <Route path="/register">
          <Link to="login" className="header__login-link">Войти</Link>
        </Route>
        <Route path="/login">
          <Link to="register" className="header__login-link">Регистрация</Link>
        </Route>
      </Switch>
    </header>
  )
}

export default Header;
