// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// import '@aws-amplify/ui-react/styles.css'; 

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>We have now Auth!</h1>
//         <button>rrrrrr</button>
//       </header>
//       {/* <AmplifySignOut /> */}
//     </div>
//   );
// }

// export default withAuthenticator(App);

import React from 'react';
import logo from './logo.svg'
import './App.css';

import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to app, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}
    </Authenticator>
  );
}
export default App;
// export default withAuthenticator(App);