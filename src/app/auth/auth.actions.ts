import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

const USER_LOGIN = "[Login Page] User Login";
const TOP_MENU_LOGOUT = "[Top Menu] Logout";

export const login = createAction(
  USER_LOGIN,
  props<{ user: User }>()
);

export const logout = createAction(
  TOP_MENU_LOGOUT
);