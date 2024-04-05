import { useOtp } from '@/pages/auth/contexts/otp';
import { useStage } from '@/pages/auth/contexts/stage';
import React from 'react';

export const useConfirmation = () => {
  const { setOtp, otp } = useOtp();
  const { setStage } = useStage();
  const countDownRef = React.useRef<NodeJS.Timeout>();

  const [seconds, setSeconds] = React.useState(otp.retryDelay / 1000);
  const [loading, setLoading] = React.useState(false);
  //   const postOtpMutation = otp.type === 'email' ? postOtpEmailMutation : postOtpPhoneMutation;
  const postOtpMutation = otp.type === 'email';

  const onSubmit = () => {
    console.log('confirmation submitted');
    setStage('signIn');
  };

  const onOtpResend = async () => {
    // const postOtpMutationResponse = await postOtpMutation.mutateAsync({
    //   params: { [otp.type]: otp.resource } as Record<'email' | 'phone', string>
    // });
    // if (postOtpMutationResponse.data.retryDelay) {
    //   setSeconds(postOtpMutationResponse.data.retryDelay / 1000);
    //   setOtp({
    //     ...otp,
    //     retryDelay: postOtpMutationResponse.data.retryDelay
    //   });
    //   setStage('confirmation');
    // }
  };

  React.useEffect(() => {
    if (!seconds) return;
    countDownRef.current = setInterval(
      () => setSeconds((seconds) => seconds - 1),
      1000,
    );
    return () => clearInterval(countDownRef.current);
  }, [!!seconds]);

  React.useEffect(() => {
    if (!seconds) clearInterval(countDownRef.current);
  }, [seconds]);

  return {
    state: { otp, seconds, loading },
    functions: { onSubmit, onOtpResend },
  };
};
