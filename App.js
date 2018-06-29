const React = require('react');
const ListContacts = require('./ListContact');

const contacts = [
    {
        id: 'tom',
        name: 'Tom',
        githubUsername: 'tom',
        avatarURL: 'http://localhost:5001/tyler.jpg'
    },
    {
        id: 'karen',
        name: 'Karen ',
        githubUsername: 'karen_isgrigg',
        avatarURL: 'http://localhost:5001/karen.jpg'
    },
    {
        id: 'richard',
        name: 'Richard ',
        githubUsername: 'richard',
        avatarURL: 'http://localhost:5001/richard.jpg'
    },
]



 class App extends React.Component{
    render(){
        return(
            <ListContacts contacts={contacts}/>
        )
    }
 }





module.exports = App;