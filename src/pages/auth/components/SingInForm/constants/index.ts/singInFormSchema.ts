import * as zod from 'zod';

export interface SingInForm {
  password: string;
  login: string;
}

export const singInFormSchema = zod.object({
  login: zod.string(),
  password: zod.string(),
});
