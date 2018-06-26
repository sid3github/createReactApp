var React = require('react');




class ProfilePic extends React.Component{
    render(){
        return(
            <div className='profilePic'>
                this will return the profile pic
            </div>
        )
    }
}

class Profile extends React.Component{
    render(){
        return(
         <div className='profile'>
             this is the Profile Component
             <ProfilePic/>
         </div>
        )
    }
}

module.exports = Profile;