import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const sendData = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {email: enteredEmail, text: enteredFeedback};

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
    .then((data) => console.log(data)); // { email: 'test@test.com', text: 'Some Feedback'}
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={sendData}>
        <div>
          <label htmlFor="email">Enter email</label>
          <input type="email" id="email" ref={emailInputRef}/>
        </div>
        <div>
          <label htmlFor="feedback">Enter Feedback</label>
          <textarea id="feedback" rows='5' ref={feedbackInputRef}></textarea>
        </div>

        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
