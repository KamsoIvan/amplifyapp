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

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { a } from 'aws-amplify';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}
    </Authenticator>
  );
}

export default App;



// <div className="App">
    //   <header>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>We now have Auth!</h1>
    //   </header>
    // </div>