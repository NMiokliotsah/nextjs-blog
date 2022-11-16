import ReactDOM from 'react-dom';

import style from './Notification.module.scss';

interface NotificationProps {
  title: string,
  message: string,
  status: string,
}

function Notification({ title, message, status }: NotificationProps) {
  const statusClass = style[status];
  const cssClasses = `${status ? style.notification : style.hide} ${statusClass}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications') as Element
  );
}

export default Notification;
