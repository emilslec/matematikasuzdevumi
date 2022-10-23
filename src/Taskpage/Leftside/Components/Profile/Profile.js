import React from 'react';


const Profile = ({user}) => {
  return (
	  <section className="bb mw5 mw7-ns h-50 bg-light-yellow pa3 ">
      <h1 className="mt0 mb5 tc">{user.username}</h1>
      <div className="f4"> Competed tasks: {user.tasks_completed}</div>
      <div className="f4 mv2"> Added tasks: {user.tasks_added}</div>
    </section>

	)

}


export default Profile