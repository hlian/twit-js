import React from 'react';

let _counter = 0;

const tweet = (username, text) => ({ id: _counter++, username, text });

const Tweet = ({ id, username, text }) => (
  <p>
    <strong>{username}</strong> {text}
  </p>
);

const App = () => {
  const database = [
    tweet("@ashley", "At the Starbucks..."),
    tweet("@rufus", "Twenty bucks for a movie ticket???"),
    tweet("@arbok", "Hssssssssss"),
  ];

  const onSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        <textarea rows="10"></textarea>
        <p>
          <input type="submit" value="Tweet" />
        </p>
      </form>
      {database.map(aTweet => <Tweet key={aTweet.id} {...aTweet} />)}
    </main>
  );
};

export default App;
