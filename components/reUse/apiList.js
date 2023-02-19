 const base_Url = "http://66.228.54.131:80/"
 const API_LIST ={
    signup:`${base_Url}signup`,
    getCurrency: `${base_Url}get_currencies`,
    authenticate: `${base_Url}web/session/authenticate`,
    getProfile: `${base_Url}get_profile/`,
    updateProfile: `${base_Url}update_profile/`,
    onBoarding:  `${base_Url}onboarding_question/`,
    getUser:`${base_Url}get_user_status/`
 }

 export default API_LIST