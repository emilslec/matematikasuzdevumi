import React from 'react';


const Profile = ({user}) => {
  return (
    user.username ?
	  <section className="bb a   mw5 mw7-ns h-50 pa3 ">
      <h1 className="mt0 mb5 tc">{user.username}</h1>
      <div className="f4"> Competed tasks: {user.tasks_completed}</div>
      <div className="f4 mv2"> Added tasks: {user.tasks_added}</div>
    </section>
    : 
    <section className="bb a mw5 mw7-ns h-50 pa3">
      <h2 className="mt0 mb5 tc">Ielogojies, lai saglabātu savu progresu un pievienotu savus uzdevumus</h2>
    </section>
    
      

	)

}


export default Profile