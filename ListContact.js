const React = require('react');

class ListContacts extends React.Component{
    render(){
        console.log(this.props);
        return(
            <ol>
                {this.props.contacts.map((contacts)=>{
                    return <li key={contacts.name}>{contacts.name}
                    <div
                        className='contact-avatar'
                        style={{
                            backgroundImage: `url(${contacts.avatarURL})`
                        }}
                    >
                    </div>
                        <div className='contact-details'>
                            <p>{contacts.name}</p>
                            <p>{contacts.githubUsername}</p>

                        </div>
                    </li>
                })}
            </ol>
        )
    }
}



module.exports = ListContacts;