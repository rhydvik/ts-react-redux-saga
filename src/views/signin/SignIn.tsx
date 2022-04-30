import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';

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
  } = useForm<ISignInModal>({
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
        <form onSubmit={handleSubmit(onSubmit)} data-testid="signInForm">
          <input {...register('email')} data-testid="email" />
          <p>{errors.email?.message}</p>

          <input {...register('password')} type="password" data-testid="password" />
          <p>{errors.password?.message}</p>

          <Button data-testid="submit" type="submit" variant="contained">
            {isLoading ? 'Loading...' : 'Sign In'}
          </Button>
        </form>
        <br />
        <Link to="/">Go to Dashboard</Link>
      </div>
    </div>
  );
};

export default SignIn;
