import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment} from './redux/actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);