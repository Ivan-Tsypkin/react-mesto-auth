export default function Login() {
  return (
    <div className="login">
      <h3 className="login__heading">Вход</h3>
      <form className={`login__form`}>

        <input
        type="email"
        className="login__form-item"
        placeholder="E-mail"
        name="email"
        id="email"
        required
        />

        <input
          type="password"
          className="login__form-item"
          placeholder="Пароль"
          name="password"
          id="password"
          required
        />

        <button
          type="submit"
          className="login__submit-button"
          aria-label="Отправить данные"
        >Войти</button>

      </form>
    </div>
  )
}
