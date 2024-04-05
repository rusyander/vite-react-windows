import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Input } from '@ozen-ui/kit/Input';
import { IconButton } from '@ozen-ui/kit/IconButtonNext';
import { EyeIcon, EyeCrossIcon } from '@ozen-ui/icons';
import { useSingInForm } from './hooks/useSingInForm';
import { useFormatMessage } from '@/utils/language/intlHelpers';

export const SingInForm = () => {
  const { stage, functions, form } = useSingInForm();
  const formatMessage = useFormatMessage();

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
        size="m"
        style={{ width: '33%', minWidth: 200 }}
      >
        <Stack direction="column" gap="m" fullWidth>
          <Stack direction="column" gap="m" fullWidth>
            <Typography variant="heading-xl" color="primary" align="center">
              Login to your account
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
                fullWidth
                autoFocus
                //   hint="login or email length must be more than 3 characters"
                // error={stage.login.length >= 3 ? false : true}
                label="Write login or email"
                {...form.register('login')}
                placeholder="Write your login or email"
                name="login"
              />

              <Input
                // error={
                //   stage.password && stage.password.length >= 3 ? false : true
                // }
                placeholder="Write your password"
                type={stage.type}
                {...form.register('password')}
                name="password"
                fullWidth
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

              <Button
                variant="contained"
                color="primary"
                className=" w-full"
                type="submit"
                // disabled={
                //   stage.login.length >= 3 && stage.password.length >= 3
                //     ? false
                //     : true
                // }
              >
                Sing in
              </Button>
            </Stack>
          </form>

          <Button
            variant="function"
            color="primary"
            className=" w-full"
            onClick={functions.createNewAccount}
          >
            Create new account
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
};
