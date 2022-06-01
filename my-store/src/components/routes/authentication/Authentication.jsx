// import {signInWithGooglePopup,createUserDocumentFromAuth}from '../../utils/firebase/firebase.utils';

import SignUpForm from 'components/sign-up-form/Sign-Up-Form.component';
import SignInForm from 'components/sign-in-form/sign-in';
import './authentication.scss'

const Authentication = () => {
	

	return (
		<div className='authentication-container'>
			
			<SignInForm className = 'sign-in'/>
			<SignUpForm />
	
		</div>
	);
};

export default Authentication;

/* const logGoogleRedirectUser = async () =>{
        const { user } = await signInWithGoogleRedirect();
        console.log({user})
    */
