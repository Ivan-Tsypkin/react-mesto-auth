import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register">
      <h3 className="register__heading">Регистрация</h3>
      <form className={`register__form`}>

        <input
        type="email"
        className="register__form-item"
        placeholder="E-mail"
        name="email"
        id="email"
        required
        />

        <input
          type="password"
          className="register__form-item"
          placeholder="Пароль"
          name="password"
          id="password"
          required
        />

        <button
          type="submit"
          className="register__submit-button"
          aria-label="Отправить данные"
        >Зарегистрироваться</button>

      </form>
      <div className="register__login">
        <p>Уже зарегистрированы?&nbsp;</p>
        <Link to="login" className="register__login-link">Войти</Link>
      </div>
    </div>
  )
}
