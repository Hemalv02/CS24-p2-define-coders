import { jwtToken, otpToken } from '@/data/cookieNames';
import { setCookie, getCookie } from '@/lib/cookieFunctions';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiRoutes } from '@/data/apiRoutes';
import { message } from 'antd';


export default function useForgetPassInitiate() {

  const [userEmail, setUserEmail] = useState('');

  async function initiate() {
    console.log("hey my email");
    console.log(userEmail);
    
    if (userEmail) {
        // Call the login API
        const res = await axios.post(apiRoutes.auth.resetInitiate, {
          email: userEmail,
       
        });

        setCookie(otpToken, res.data.otptoken, 1);
        // console.log(res.data);
        //console.log(getCookie(otpToken));
        message.success("a mail has been sent to " + userEmail + " with the OTP");
        setCookie(jwtToken, userEmail, 0.01);
        return true;
    }    
    
    message.error("Invalid credentials!");
    return false;
  }

  return {userEmail, setUserEmail, initiate};
}