import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { loginUser } from '../../redux-modules/auth/Actions';
import { signInSchema } from './validation';
import { ISignInModal } from '../../common/Types';
import styles from './styles.module.scss';
import { RootState } from '../../redux-modules/store/rootState';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const dispatch = useDispatch();
  const isLoading = useSelector(({ Auth }: RootState) => Auth.isLoading);
  const onSubmit = (data: ISignInModal) => {
    dispatch(loginUser(data));
  };

  return (
    <div>
      <h3>sign in</h3>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('email')} />
          <p>{errors.email?.message}</p>

          <input {...register('password')} type="password" />
          <p>{errors.password?.message}</p>

          <button type="submit">{isLoading ? 'Loading...' : 'Sign In'}</button>
        </form>
        <br />
        <Link to="/">Go to Dashboard</Link>
      </div>
    </div>
  );
};

export default SignIn;
