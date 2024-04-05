import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { useSelectConfirmation } from './hooks/useSelectConfirmation';
import { Input } from '@ozen-ui/kit/Input';
import { PatternFormat } from 'react-number-format';

export const OtpForms = () => {
  const { state, functions } = useSelectConfirmation();
  return (
    <>
      {state.otp.type === 'email' ? (
        <Stack direction="column" gap="m" fullWidth>
          <Stack direction="column" gap="m" fullWidth>
            <Typography variant="heading-xl" color="primary" align="center">
              Two factor authentication
            </Typography>
            <Typography color="primary" variant="text-m" align="center">
              We sent you a code to your email
            </Typography>
          </Stack>

          <Input
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
            <Typography variant="heading-xl" color="primary" align="center">
              Two factor authentication
            </Typography>
            <Typography color="primary" variant="text-m" align="center">
              We sent you a code to your phone
            </Typography>
          </Stack>
          <PatternFormat
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
  );
};
