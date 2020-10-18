import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../Actions'

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div key={song.title}>
                    <button onClick= {() =>this.props.selectSong(song)}>
                        Select
                    </button>

            <div className= 'content'>{song.title}</div>
                </div>
            );
        })
    }
    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps=state=>{
  return{
      songs: state.songs
  }
}
export default connect(mapStateToProps, {selectSong})(SongList);