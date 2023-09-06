import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(createEntry)}
        <Entry
          id="1"
          emoji="💪"
          name="Person With Folded Hands"
          descrption="Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
        />
        <Entry />
        <Entry />
      </dl>
    </div>
  );
}

export default App;
