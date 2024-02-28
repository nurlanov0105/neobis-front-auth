import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import classNames from 'classnames';

import { loginValidationSchema } from '../model/validation';
import styles from './styles.module.scss';
import eyeOpenedImg from '@/shared/assets/imgs/auth/eye-opened.svg';

const LoginForm: FC = () => {
   const onSubmit = (e: any) => {
      e.preventDefault();
   };
   const formik = useFormik({
      initialValues: {
         login: '',
         password: '',
      },
      initialErrors: {
         login: 'Требуется логин',
         password: 'Требуется пароль',
      },
      validationSchema: loginValidationSchema,
      onSubmit: (values, { setSubmitting }) => {
         setSubmitting(false);
         console.log(values);
      },
   });

   return (
      <div className={styles.formWrapper}>
         <h3 className='h3'>Вэлком бэк!</h3>
         <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.form__col}>
               <input
                  type='text'
                  className={styles.form__input}
                  placeholder='Введи туда-сюда логин'
                  name='login'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.login}
               />
               <div className={styles.form__box}>
                  <input
                     type='password'
                     className={styles.form__input}
                     placeholder='Пароль (тоже введи)'
                     name='password'
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.password}
                  />
                  <img src={eyeOpenedImg} alt='eye opened' className={styles.form__eye} />
               </div>
            </div>
            <button
               type='submit'
               className={classNames('btn', styles.form__btn)}
               disabled={!!Object.keys(formik.errors).length}>
               <span>Войти</span>
            </button>
         </form>
         <Link to='/register' className={classNames('btn btn--light', styles.btnLight)}>
            <span>У меня еще нет аккаунта</span>
         </Link>
      </div>
   );
};

export default LoginForm;