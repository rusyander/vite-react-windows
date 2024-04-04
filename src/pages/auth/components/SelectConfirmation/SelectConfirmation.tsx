import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Radio } from '@ozen-ui/kit/Radio';

import { FormGroup } from '@ozen-ui/kit/FormGroup';

import { useSelectConfirmation } from './hooks/useSelectConfirmation';

export const SelectConfirmation = () => {
  const { state, functions } = useSelectConfirmation();
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
              Choose resource for otp code
            </Typography>
            <Typography color="primary" variant="text-m" align="center">
              We sent you a code to your resource
            </Typography>
          </Stack>

          <form
          // onSubmit={async (event) => {
          //   event.preventDefault();
          //   await functions.onSubmit();
          // }}
          >
            <Stack direction="column" gap="l" fullWidth>
              <FormGroup role="radiogroup">
                <Stack direction="column" gap="l" fullWidth>
                  <Radio label="Otp code to email" name="otp" />
                  <Radio label="Otp code to phone" name="otp" />
                </Stack>
              </FormGroup>

              <Stack direction="row" gap="m" fullWidth>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-full"
                  //   onClick={functions.goToSignIn}
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
                  Continue
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Stack>
  );
};
