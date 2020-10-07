import React, {useContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import { Redirect } from "react-router-dom"
import AuthUserContext from '../../context/AuthContext';
import { getJWT } from '../../services/axios/config';
import { LOGIN } from '../Layout/routes';
import { useHistory } from "react-router-dom";

function ProtectedPage(props) {
    let [isReady, setIsReady] = useState(false)
    let {user} = useContext(AuthUserContext)
    let history = useHistory();

    console.log(user)

    useEffect(() => {
        let isSubscribed = true;
        if(isSubscribed){
            handleAuth()
        }

        return () => isSubscribed = false;
    }, [])

    console.log(props, 'this is props in protected page')

   

    const handleAuth = async() => {
        let token = await getJWT()

        if(token){

            const decoded = jwt_decode(token)
            if(decoded && decoded._id){
                setIsReady(true)
            }
        } else {
            history.push(`${LOGIN}`)

            // let {asPath} = router;
            // Router.push(`${LOGIN}?redirect=${asPath}`)
        }
    }
   



        

    return(
       <>{props.children}</>

    )
}



export default ProtectedPage