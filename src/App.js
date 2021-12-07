import { authentication } from "./firebse.config";
import { getAuth, signOut } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function App() {
  
  const sign = () => 
  {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
const log=()=>
{
  const auth = getAuth();
signOut(auth).then(() => {
  console.log(auth,' Sign-out successful.')
  // Sign-out successful.
}).catch((error) => {
  console.log(error);
});
}

  return (
    <div className="App">
      <center>
        <button onClick={sign}> Sign In</button>
        <p>Firebase Sign IN</p>
        <button onClick={log}> Sign Out</button>
      </center>
    </div>
  );
}

export default App;
