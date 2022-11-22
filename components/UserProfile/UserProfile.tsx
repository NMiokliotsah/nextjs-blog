import styles from './UserProfile.module.scss';

function UserProfile() {
  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor='new-password'>New Password</label>
          <input type='password' id='new-password' />
        </div>
        <div className={styles.control}>
          <label htmlFor='old-password'>Old Password</label>
          <input type='password' id='old-password' />
        </div>
        <div className={styles.action}>
          <button>Change Password</button>
        </div>
      </form>
    </section>
  );
}

export default UserProfile;
