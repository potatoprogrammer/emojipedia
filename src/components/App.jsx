import React from "react";
import emojis from "../emojipedia";
import Create from "./Create";

function createEmojicard(emoji) {
  return (
    <Create
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createEmojicard)}</dl>
    </div>
  );
}

export default App;
