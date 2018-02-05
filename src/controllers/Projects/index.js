import { connect } from 'react-redux';
import Projects from 'components/Projects';

const mapStateToProps = state => ({
    user: state.user,
    projects: state.projects,
});

export default connect(mapStateToProps, null)(Projects);