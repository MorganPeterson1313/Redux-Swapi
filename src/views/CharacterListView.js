import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { CharacterList } from "../components";
import {getCharacters} from '../actions';


class CharacterListView extends React.Component {
//  constructor (props){
//    super(props);


//  }

  componentDidMount() {
    // call our action

  //  const fetchCharacter = e => {
  //    e.preventDefault();
  //     }

  this.props.getCharacters();
  
    }
    

  render() {
    console.log("charactrlist view render log", this.props.characters)
    if (this.props.fetching === true) {
      // return something here to indicate that you are fetching data
     return  (<Loader type="Ball-Triangle" height="90" width="60" color="#00BFFF" />)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      
      {/* <Button color="info" onClick={fetchCharacter}>Get Character</Button> */}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.fetching,
});


export default connect(
   mapStateToProps,
  {getCharacters}
)(CharacterListView);
