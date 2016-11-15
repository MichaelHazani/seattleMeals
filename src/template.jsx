const React = require('react');
const ReactDOM = require('react-dom');

const MagicContainer = React.createClass({

    getInitialState: function() {
        return {
            currentSpells: ['flying', 'invisibility', 'randomness', 'synchronicity']
        }
    },

    addMagic: function(newSpell) {
        this.setState({
            currentSpells: this.state.currentSpells.concat([newSpell])
        });
    },
    render: function() {
        return (
            <div>

                <h1>List of Magicks</h1>
                <ShowMagicks magicks={this.state.currentSpells}/>
                <AddMagickElement addMagickSub={this.addMagic}/>
            </div>
        )
    }

});

const ShowMagicks = React.createClass({

    render: function() {
        let MagickList = this.props.magicks.map(function(magick) {
            return <li>{magick}</li>
        });
        return (
            <ul>
                {MagickList}
            </ul>
        )
    }
});


const AddMagickElement = React.createClass({
getInitialState: function(){
  return {
    newMagick: ''
  }
},

updateInput: function(e){
  this.setState({
newMagick: e.target.value
  });
},

submitNewMagick: function(){
  this.props.addMagickSub(this.state.newMagick);
  this.setState({newMagick: ''});
},
    render: function() {

        return (
            <div>
                <h4>add NEW Magick</h4>
                <input type="text" onChange={this.updateInput} value={this.state.newMagick}></input><button onClick={this.submitNewMagick}>Add Magick</button>
            </div>
        );
    }
});

ReactDOM.render(
    <MagicContainer/>, document.getElementById('app'));

// var FriendsContainer = React.createClass({
//   getInitialState: function(){
//     return {
//       name: 'Tyler McGinnis',
//       friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen'],
//     }
//   },
//   addFriend: function(friend){
//     this.setState({
//       friends: this.state.friends.concat([friend])
//     });
//   },
//   render: function(){
//     return (
//       <div>
//         <h3> Name: {this.state.name} </h3>
//         <AddFriend addNew={this.addFriend} />
//         <ShowList names={this.state.friends} />
//       </div>
//     )
//   }
// });
// var AddFriend = React.createClass({
//   getInitialState: function(){
//     return {
//       newFriend: ''
//     }
//   },
//   updateNewFriend: function(e){
//     this.setState({
//       newFriend: e.target.value
//     });
//   },
//   handleAddNew: function(){
//     this.props.addNew(this.state.newFriend);
//     this.setState({
//       newFriend: ''
//     });
//   },
//   render: function(){
//     return (
//         <div>
//           <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
//           <button onClick={this.handleAddNew}> Add Friend </button>
//         </div>
//     );
//   }
// });
// var ShowList = React.createClass({
//   render: function(){
//     var listItems = this.props.names.map(function(friend){
//       return <li> {friend} </li>;
//     });
//     return (
//       <div>
//         <h3> Friends </h3>
//         <ul>
//           {listItems}
//         </ul>
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(
//     <FriendsContainer/>, document.getElementById('app'));
