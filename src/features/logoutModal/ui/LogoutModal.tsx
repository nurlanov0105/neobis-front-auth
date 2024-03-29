import { useAppDispatch, useAppSelector } from '@/app/appStore';
import styles from './styles.module.scss';
import { closeModal } from '@/widgets/modal';
import { removeUser, useLogoutMutation } from '@/features/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LogoutModal = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const refresh = useAppSelector((state) => state.auth.refresh);
   const [logout, { isLoading }] = useLogoutMutation();

   const handleLogOut = async () => {
      try {
         const res: any = await logout({ refresh });
         if (res.error) {
            console.log(res.error);
         } else {
            toast.success('Ты вышел из аккаунта');

            localStorage.removeItem('currentUser');
            dispatch(removeUser());
            dispatch(closeModal());
            navigate('/login');
         }
      } catch (error: any) {
         console.log(error);
      }
   };

   const handleStay = () => {
      dispatch(closeModal());
   };

   return (
      <div className={styles.block}>
         <h4 className={styles.block__title}>Выйти?</h4>
         <h5 className={styles.block__subtitle}>Точно выйти?</h5>
         <div className={styles.block__btns}>
            <button className='btn' onClick={handleLogOut} disabled={isLoading}>
               {isLoading ? <span>Выход...</span> : <span>Да, точно</span>}
            </button>
            <button className='btn btn--light' onClick={handleStay} disabled={isLoading}>
               <span>Нет, остаться</span>
            </button>
         </div>
      </div>
   );
};

export default LogoutModal;
