import { FC } from 'react';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useEthersContext } from 'eth-hooks/context';
import { Button } from 'antd';

export const GET_CHALLENGE = gql`
  query ($request: ChallengeRequest!) {
    challenge(request: $request) {
      text
    }
  }
`;
export const AUTHENTICATION = gql`
  mutation ($request: SignedAuthChallenge!) {
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
  }
`;
interface Props {
  updateProfile(): any;
  updateSignInStatus(status: boolean): any;
}

const SignIn: FC<Props> = ({ updateSignInStatus, updateProfile }) => {
  const ethersContext = useEthersContext();
  const [getChallenge, { error: errorChallenege }] = useLazyQuery(GET_CHALLENGE);
  const [authenticate, { error: errorAuthenticate }] = useMutation(AUTHENTICATION);

  const handleSignIn = async () => {
    try {
      const challengeData = await getChallenge({
        variables: {
          request: {
            address: ethersContext?.account,
          },
        },
      });

      const signedChallengeData = await ethersContext?.provider
        ?.getSigner()
        .signMessage(challengeData?.data.challenge.text);

      console.log('signedChallangeData', signedChallengeData);
      const accessTokens = await authenticate({
        variables: {
          request: {
            address: ethersContext?.account,
            signature: signedChallengeData,
          },
        },
      });

      localStorage.setItem('accessToken', accessTokens.data.authenticate.accessToken);
      localStorage.setItem('refreshToken', accessTokens.data.authenticate.refreshToken);
      updateProfile();
      updateSignInStatus(true);
    } catch (error) {
      console.log('Sign in failed');
      console.log(error);
    }
  };
  return (
    <Button onClick={handleSignIn} type="primary" className="w-32 m-auto">
      Sign in
    </Button>
  );
};
export default SignIn;
