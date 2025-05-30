import styles from './svg-box.module.css';

export const SvgBox = ({ svgPath }) => {
   return (
      <div className={styles.svgBox}>
         {svgPath && (
            <img
               src={svgPath}
               alt="Crime icon"
               className={styles.icon}
            />
         )}
      </div>
   );
}