import React, { useRef } from 'react';
import { useNotification } from '../../hooks/useNotification';
import Notification from '../Notification/Notification';

import styles from './UserProfile.module.scss';

const changePassword = async (newPassword: string, oldPassword: string) => {
  const result = await fetch('api/user/change-password', {
    method: 'PUT',
    body: JSON.stringify({ oldPassword, newPassword }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!result.ok) {
    throw new Error('Something went wrong!');
  }
}

function UserProfile() {
  const newPassword = useRef() as React.MutableRefObject<HTMLInputElement>;
  const oldPassword = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [notification, setRequestStatus] = useNotification();

  const handleSubmitForm = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    try {
      setRequestStatus('pending');
      await changePassword(newPassword.current.value, oldPassword.current.value);
      setRequestStatus('success');

      newPassword.current.value = '';
      oldPassword.current.value = '';
    } catch(e) {
      console.error(e);
      setRequestStatus('error');
    }
  }

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <div className={styles.control}>
          <label htmlFor='new-password'>New Password</label>
          <input ref={newPassword} type='password' id='new-password' />
        </div>
        <div className={styles.control}>
          <label htmlFor='old-password'>Old Password</label>
          <input ref={oldPassword} type='password' id='old-password' />
        </div>
        <div className={styles.action}>
          <button>Change Password</button>
        </div>
      </form>
      {notification && <Notification
        title={notification.title}
        message={notification.message}
        status={notification.status}
      />}
    </section>
  );
}

export default UserProfile;
