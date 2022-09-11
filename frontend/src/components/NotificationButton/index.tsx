import icon from '../../assets/img/notification-icon.svg'; {/*importando o notification-icon da pasta assets/img */}

import './styles.css';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn"> {/*Em REACT se usa "ClassName" ao invés de "Class" */}
            <img src={icon} alt="Notificar" /> {/*Para usar um arquivo importado no REACT se usa as chaves "{}" */}
        </div>
    )
}

export default NotificationButton;
