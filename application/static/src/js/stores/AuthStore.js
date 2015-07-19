import { Store } from 'flummox';

export default class AuthStore extends Store {
  constructor(flux) {
    super();

    const authActions = flux.getActionIds('auth');
    this.register(authActions.login, this.handleLogin);
    this.register(authActions.loginUser, this.handleLoginUser);

    this.state = {
      user: null
    };
  }

  handleLogin(user) {
    this.setState({user: user});
  }

  handleLoginUser(user) {
    this.setState({user: user});
  }
}
