import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions'

class BookmarkList extends React.Component {

  render() {
    console.log("in bookmark")
    return (
      <div>

        {this.props.bookmarks.map((bookmark) => {
          return <div>{bookmark.title}</div>
        })}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    currentUser: state.user.currentUser,
    savedJobs: state.user.savedJobs,
    savedCompanies: state.user.savedCompanies,
    savedNotes: state.user.savedNotes,
    savedBookmarks: state.user.savedBookmarks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);