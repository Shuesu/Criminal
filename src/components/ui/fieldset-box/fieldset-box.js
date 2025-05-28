import styles from './fieldset-box.module.css';

export const FieldsetBox = ({ label, children, className = '' }) => {
   return (
      <fieldset className={`${styles.fieldset} ${className}`}>
         <legend className={styles.legend}>{label}</legend>
         {children}
      </fieldset>
   );
};