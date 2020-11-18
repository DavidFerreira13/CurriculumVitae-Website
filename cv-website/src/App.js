import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from './Drawer'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.root}>
        <Drawer/>
        <header className="App-header">
          Welcome to my online Curriculum
        </header>
      </div>
      {/*
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signin" exact component={Signin} />
        </Switch>
      </Router>
      */}
      <footer className="page-footer">
        <p className="footer-text">
          This web-curriculum was made with react for the purpose of learning how to use it
        </p>
      </footer>
    </main>
  );
}

export default App;
