import styles from './styles.module.scss';
import { AuthIntro } from '@/entities/authIntro';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackImg from '@/shared/assets/imgs/auth/arrow-back.svg';

const AuthLayout = () => {
   const pathname = useLocation().pathname.slice(1);
   const navigate = useNavigate();
   const handleGoBack = () => {
      navigate(-1);
   };

   return (
      <main className='container'>
         <div className={styles.row}>
            <div className={styles.intro}>
               <AuthIntro />
            </div>

            {pathname === 'login' ? (
               <Outlet />
            ) : (
               <div className={styles.section}>
                  {pathname !== 'confirm' && (
                     <button className={styles.back} onClick={handleGoBack}>
                        <img src={ArrowBackImg} alt='arrow back' /> <span>Назад</span>
                     </button>
                  )}
                  <div className={styles.block}>
                     <Outlet />
                  </div>
               </div>
            )}
         </div>
      </main>
   );
};

export default AuthLayout;
