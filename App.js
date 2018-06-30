const React = require('react');
const ListContacts = require('./ListContact');




 class App extends React.Component {
     constructor(props){
         super(props);
        this.state = {
             contacts: [
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
         }
         }

     render() {
         return (
             <div>
             <ListContacts contacts={this.state.contacts}/>
             </div>

         )
     }
 }





module.exports = App;