import { Button } from '@ozen-ui/kit/ButtonNext';
import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';

import { useConfirmation } from './hooks/useConfirmation';
import { Input } from '@ozen-ui/kit/__inner__/esm/components/Input';

export const Confirmation = () => {
  const { state, functions } = useConfirmation();
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
        size="l"
        style={{ width: '33%', minWidth: 200 }}
      >
        <Stack direction="column" gap="m" fullWidth>
          <Stack direction="column" gap="m" fullWidth>
            <Typography variant="heading-xl" color="primary" align="center">
              Two factor authentication
            </Typography>
            <Typography color="primary" variant="text-m" align="center">
              We sent you a code to your {state.otp.type}{' '}
            </Typography>
          </Stack>

          <Stack direction="column" gap="l" fullWidth>
            <Input
              autoFocus
              label="PIN"
              placeholder="123456"

              //   disabled={state.loading}
            />

            <Stack direction="column" gap="m" fullWidth>
              <Button
                variant="contained"
                color="primary"
                className="w-full"
                onClick={functions.onSubmit}
              >
                Confirm
              </Button>
              {!!state.seconds && (
                <div>
                  <p className="text-center text-sm text-muted-foreground">
                    try again after {state.seconds} seconds
                  </p>
                </div>
              )}
              {!state.seconds && (
                <Button
                  type="button"
                  variant="function"
                  className="w-full"
                  disabled={state.loading}
                  onClick={functions.onOtpResend}
                >
                  {state.loading && 'Sending...'}
                  Send otp
                </Button>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
