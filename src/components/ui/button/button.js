import styles from './button.module.css';

export const Button = ({ children, isActive, onClick, className, ...props }) => {
   return (
      <button
         className={`${styles.button} ${isActive ? styles.active : ''}`}
         onClick={onClick}
         {...props}
      >
         {children}
      </button>
   );
}