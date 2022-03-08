/* function User(props) {
    console.log(props)
    return (
        <>
        <div>{props.name}</div>
        <div>selam</div>
        </>
    )
}

export default User ; */

import Prop from "prop-types";

 function User({age,name,surname,isLoggedIn,friends }) {
    
    return (
        <>
        <div>
            {isLoggedIn ? `${name} ${surname} (${age})` : "eminmisin yanlış giriş yaptınız"}

            {friends.map((friend,index)=> (
            <div key={index}>{index}--{friend}</div>
            ))}
        </div>
        
        </>
    )
}

User.propTypes = {
    name :Prop.string ,
    surname:Prop.string,
    isLoggedIn : Prop.bool,
    friends:Prop.array,

}

export default User ; 