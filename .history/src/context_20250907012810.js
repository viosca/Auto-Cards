// Your "Context" tab should look like this
const modifier = (text) => {
  // Your other context modifier scripts go here (preferred)
  [text, stop] = AutoCards("context", text, stop);
  text = text.replace(/^World Lore:$/m,"Named Entities (NER):");
  // Your other context modifier scripts go here (alternative)
  //console.log("context text: ", text);
  return {text, stop};
};
modifier(text);
