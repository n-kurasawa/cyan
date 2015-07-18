import { Store } from 'flummox';

export default class AuthStore extends Store {
  constructor(flux) {
    super();

    const authActions = flux.getActionIds('auth');
    this.register(authActions.login, this.handleLogin);

    this.state = {
      user: null
    };
  }

  handleLogin(user) {
    console.log("store");
    console.log(user);
    this.setState({user: user});
  }

}
