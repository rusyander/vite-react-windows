import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Radio } from '@ozen-ui/kit/Radio';
import { Input } from '@ozen-ui/kit/Input';
import { RadioGroup } from '@ozen-ui/kit/RadioGroup';

import { useSelectConfirmation } from './hooks/useSelectConfirmation';
import { OtpForms } from './OtpForms';
import { PatternFormat } from 'react-number-format';

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
        {state.selectConfirmationFormStage === 'select' ? (
          <Stack direction="column" gap="m" fullWidth>
            <Stack direction="column" gap="m" fullWidth>
              <Typography variant="heading-xl" color="primary" align="center">
                Choose resource for otp code
              </Typography>
              <Typography color="primary" variant="text-m" align="center">
                We sent you a code to your resource
              </Typography>
            </Stack>

            <Stack direction="column" gap="l" fullWidth>
              <RadioGroup
                direction="column"
                name="default-value-example"
                defaultValue={state.selectedResource}
                value={state.selectedResource}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  functions.setSelectedResource(
                    event.target.value as 'phone' | 'email',
                  )
                }
              >
                <Radio label="Otp code to email" name="otp" value="email" />
                <Radio label="Otp code to phone" name="otp" value="phone" />
              </RadioGroup>

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
                  onClick={functions.onSubmitToResourceForm}
                >
                  Continue
                </Button>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <>
            {state.selectedResource === 'email' ? (
              <Stack direction="column" gap="m" fullWidth>
                <Stack direction="column" gap="m" fullWidth>
                  <Typography
                    variant="heading-xl"
                    color="primary"
                    align="center"
                  >
                    Two factor authentication
                  </Typography>
                  <Typography color="primary" variant="text-m" align="center">
                    We sent you a code to your email
                  </Typography>
                </Stack>

                <Input
                  autoFocus
                  label="Email"
                  placeholder="email@example.com"
                  type="email"

                  //   disabled={state.loading}
                />

                <Stack direction="row" gap="m" fullWidth>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full"
                    onClick={functions.backToSelectConfirmationFormStage}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full"
                    type="submit"
                    onClick={functions.handleSendEmail}
                  >
                    Continue
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <Stack direction="column" gap="m" fullWidth>
                <Stack direction="column" gap="m" fullWidth>
                  <Typography
                    variant="heading-xl"
                    color="primary"
                    align="center"
                  >
                    Two factor authentication
                  </Typography>
                  <Typography color="primary" variant="text-m" align="center">
                    We sent you a code to your phone
                  </Typography>
                </Stack>
                <PatternFormat
                  autoFocus
                  defaultValue=""
                  format="+9 (###) #### ###"
                  allowEmptyFormatting
                  mask="_"
                  label="Мобильный телефон"
                  style={{
                    minWidth: 240,
                  }}
                  customInput={Input}
                  fullWidth
                />

                <Stack direction="row" gap="m" fullWidth>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full"
                    onClick={functions.backToSelectConfirmationFormStage}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full"
                    type="submit"
                    onClick={functions.handleSendPhone}
                  >
                    Continue
                  </Button>
                </Stack>
              </Stack>
            )}
          </>
        )}
      </Card>
    </Stack>
  );
};
