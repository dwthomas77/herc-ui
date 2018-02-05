import { connect } from 'react-redux';
import AuthorizedRoute, { LoginRoute } from 'components/Route';

const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(AuthorizedRoute);
export const LoginRouteController = connect(mapStateToProps)(LoginRoute);
