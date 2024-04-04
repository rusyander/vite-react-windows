import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Input } from '@ozen-ui/kit/Input';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import {
  Select,
  OptionItemIcon,
  Option,
  OptionItemText,
} from '@ozen-ui/kit/Select';
import { EyeIcon, EyeCrossIcon, CheckIcon } from '@ozen-ui/icons';

import { useSingUpForm } from './hooks/useSingUpForm';
import { COUNTRIES } from './constants';

export const SingUpForm = () => {
  const { state, functions, form } = useSingUpForm();
  const passwordMessageText =
    'Password confirmation must be the same as the password';

  const onSubmit = (data: any) => {
    console.log('submit', data);
  };
  return (
    <Stack
      direction="row"
      align="center"
      justify="center"
      gap="l"
      fullWidth
      className="h-screen"
    >
      {/* {formatMessage('hello')} */}
      <Card
        backgroundColor="standard"
        borderColor="standard"
        borderVariant="solid"
        borderWidth="m"
        size="l"
        style={{ width: '33%', minWidth: 200 }}
      >
        <Stack direction="column" gap="m" fullWidth>
          <Stack direction="column" gap="m" fullWidth>
            <Typography variant="heading-xl" color="primary" align="center">
              Create an account
            </Typography>
            <Typography color="primary" variant="text-m" align="center">
              Enter your email and password
            </Typography>
          </Stack>

          <form
            onSubmit={async (event) => {
              event.preventDefault();
              await functions.onSubmit();
            }}
          >
            <Stack direction="column" gap="m" fullWidth>
              <Input
                //   hint="login or email length must be more than 3 characters"
                //   error={state.login.length >= 3 ? false : true}
                label="Write login or email"
                placeholder="email@example.com"
                {...form.register('email')}
                hint={form.formState.errors.email?.message}
                error={form.formState.errors.email ? true : false}
                //   disabled={state.loading}
              />

              <Input
                //   error={
                //     state.password && state.password.length >= 3 ? false : true
                //   }
                placeholder="Login"
                type="text"
                label="Login"
                {...form.register('login')}
                //   hint="Min length 3 characters"
              />
              <Input
                placeholder="FirstName"
                type="text"
                label="FirstName"
                hint={form.formState.errors.firstName?.message}
                {...form.register('firstName')}
              />
              <Input
                placeholder="LastName"
                type="text"
                label="LastName"
                hint={form.formState.errors.lastName?.message}
                {...form.register('lastName')}
              />

              {/* <Input placeholder="lastName" type="text" name="lastName" /> */}

              {/* <Select
                name="country"
                label="Country"
                onChange={(value) => setValue(value)}
              >
                {COUNTRIES.map((country) => () => (
                  <Option value={country.id}>{country.label} </Option>
                ))}
    
              </Select> */}

              <Select
                label="Country"
                value={state.select}
                // style={{
                //   maxWidth: 320,
                // }}
                {...form.register('country')}
                onChange={(value) => {
                  if (value) functions.setSelect(+value);
                }}
                fullWidth
              >
                {COUNTRIES?.map(({ id, label, code }) => {
                  const selected = state.select === id;
                  return (
                    <Option
                      key={id}
                      label={label}
                      value={id}
                      selected={selected}
                    >
                      <OptionItemIcon>
                        <Typography
                          variant="heading-xl"
                          color="primary"
                          align="center"
                        >
                          {code}
                        </Typography>
                      </OptionItemIcon>
                      <OptionItemText primary={label} />
                      {selected && (
                        <OptionItemIcon>
                          <CheckIcon />
                        </OptionItemIcon>
                      )}
                    </Option>
                  );
                })}
              </Select>

              <Input
                placeholder="Password"
                type="text"
                label="Password"
                hint={form.formState.errors.password?.message}
                {...form.register('password')}
                error={form.formState.errors.password ? true : false}
                renderRight={({ size }) => (
                  <IconButton
                    size={size}
                    variant="function"
                    icon={
                      state.typePassword === 'password' ? EyeIcon : EyeCrossIcon
                    }
                    onClick={() =>
                      functions.setTypePassword(
                        state.typePassword === 'password' ? 'text' : 'password',
                      )
                    }
                  />
                )}
              />
              {/* {state.passwordMessage.toString()} */}
              <Input
                placeholder="Confirm your password"
                type="text"
                label="Confirm your password"
                hint={state.passwordMessage ? '' : passwordMessageText}
                {...form.register('passwordConfirmation')}
                name="passwordConfirmation"
                error={
                  !state.passwordMessage || form.formState.errors.password
                    ? true
                    : false
                }
                // error={
                //   form.formState.errors.passwordConfirmation
                //     ? true
                //     : state.passwordMessage
                //       ? passwordMessageText
                //       : ''
                // }
                renderRight={({ size }) => (
                  <IconButton
                    size={size}
                    variant="function"
                    icon={
                      state.typePasswordConfirm === 'password'
                        ? EyeIcon
                        : EyeCrossIcon
                    }
                    onClick={() =>
                      functions.setTypePasswordConfirm(
                        state.typePasswordConfirm === 'password'
                          ? 'text'
                          : 'password',
                      )
                    }
                  />
                )}
              />
              <Stack direction="row" gap="m" fullWidth>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full"
                  onClick={functions.goToSignIn}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full"
                  type="submit"
                  //   onClick={form.handleSubmit(functions.onSubmit)}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Stack>
  );
};
