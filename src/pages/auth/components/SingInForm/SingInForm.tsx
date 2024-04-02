import { useState } from 'react';
import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Input } from '@ozen-ui/kit/Input';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { EyeIcon, EyeCrossIcon } from '@ozen-ui/icons';
import { useSingInForm } from './hooks/useSingInForm';

export const SingInForm = () => {
  // const [type, setType] = useState<'password' | 'text'>('password');
  // const [password, setPassword] = useState<string>('');
  // const [login, setLogin] = useState<string>('');

  const { stage, functions } = useSingInForm();

  return (
    <Stack
      direction="row"
      align="center"
      justify="center"
      gap="l"
      fullWidth
      className="h-screen"
    >
      <Card
        backgroundColor="standard"
        borderColor="standard"
        borderVariant="solid"
        borderWidth="m"
        size="m"
      >
        <Stack direction="column" gap="l">
          <Stack direction="column" gap="m">
            <Typography variant="heading-xl" color="primary" align="center">
              Login to your account
            </Typography>
            <Typography color="primary" variant="text-m" align="center">
              Enter your email and password
            </Typography>
          </Stack>

          <Stack direction="column" gap="m">
            <Input
              //   hint="login or email length must be more than 3 characters"
              error={stage.login.length >= 3 ? false : true}
              label="Write login or email"
              value={stage.login}
              onChange={(e) => functions.setLogin(e.target.value)}
              type={stage.login.includes('@') ? 'email' : 'text'}
            />

            <Input
              error={
                stage.password && stage.password.length >= 3 ? false : true
              }
              placeholder="Write your password"
              type={stage.type}
              inputProps={{
                autoComplete: 'off',
              }}
              value={stage.password}
              hint="Min length 3 characters"
              onChange={(e) => functions.setPassword(e.target.value)}
              renderRight={({ size }) => (
                <IconButton
                  size={size}
                  variant="function"
                  icon={stage.type === 'password' ? EyeIcon : EyeCrossIcon}
                  onClick={() =>
                    functions.setType(
                      stage.type === 'password' ? 'text' : 'password',
                    )
                  }
                />
              )}
            />
          </Stack>
          <Stack gap="xl">
            <Button
              variant="contained"
              color="primary"
              className="mt-7 w-full"
              disabled={
                stage.login.length >= 3 && stage.password.length >= 3
                  ? false
                  : true
              }
            >
              Sing in
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
