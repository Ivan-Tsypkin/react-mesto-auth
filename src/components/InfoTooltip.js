export default function InfoTooltip(props) {
  return (
    <div
      /* className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} */
      className={`popup popup_type_${props.name} `}
      onClick = {props.onClose}
    >

      <div className="popup__container" onClick = {(e) => e.stopPropagation()}>
        <button
            type="button"
            className="popup__close-button"
            aria-label="Закрыть окно"
            onClick={props.onClose}
        ></button>

        <div className="popup__success"></div>

        <h3 className="popup__heading popup__heading_type_info-tooltip">Вы успешно зарегистрировались!</h3>

      </div>
    </div>
  )
}
