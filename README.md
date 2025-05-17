# Auto-Cards
Made by LewdLeah ❤️
## Overview
Auto-Cards is a plug-and-play script for AI Dungeon that watches your story and automatically writes plot-relevant story cards during normal gameplay. My primary goal was to address the "object permanence problem" by extending story cards and memories with deeper automation. Auto-Cards builds a living reference of your adventure's world as you go.
## Main Features
- Object permanence! (sort of)
- Simple and easy to use, full background automation allows you to focus on gameplay
- Detects named entities from your story and periodically writes new cards
- Smart long-term memory updates and summaries for important cards
- Fully customizable AI card generation and memory summarization prompts
- Suitable for both free and premium AI Dungeon users alike
- Optional in-game commands to manually direct the card generation process
- Optional in-game scripting interface (LSIv2)
- Optional API for other creators to use
## Permission
Auto-Cards is both free and open source for anyone to use within their own scenarios or scripts, even including published works. General-purpose usefulness and compatibility were my top design priorities. You have my full permission to use, copy, or modify Auto-Cards. Please enjoy! ❤️
## Basic Installation Guide
1. Use the [AI Dungeon website](https://aidungeon.com/) on PC (or view as desktop if mobile-only)
2. [Create a new scenario](https://help.aidungeon.com/faq/what-are-scenarios) or edit one of your existing scenarios
3. Open the "DETAILS" tab at the top while editing your scenario
4. Scroll to the bottom and select "EDIT SCRIPTS"
5. Select "Input" on the left
6. Delete everything you see there
7. Copy and paste this inside:
```javascript
// Your "Input" tab should look like this
const modifier = (text) => {
  //
  // Ideally, your other input code goes above this line
  text = AutoCards("input", text);
  // Alternatively, you may also put it below this line
  //
  return {text};
};
modifier(text);
```
8. Select "Context" on the left
9. Delete everything you see there
10. Copy and paste this inside:
```javascript
// Your "Context" tab should look like this
const modifier = (text) => {
  //
  // Ideally, your other context code goes above this line
  [text, stop] = AutoCards("context", text, stop);
  // Alternatively, you may also put it below this line
  //
  return {text, stop};
};
modifier(text);
```
11. Select "Output" on the left
12. Delete everything you see there
13. Copy and paste this inside:
```javascript
// Your "Output" tab should look like this
const modifier = (text) => {
  //
  // Ideally, your other output code goes above this line
  text = AutoCards("output", text);
  // Alternatively, you may also put it below this line
  //
  return {text};
};
modifier(text);
```
14. Select "Library" on the left
15. Delete everything you see there
16. Open my full Library code (hyperlink below) in a new browser tab
- [Library](./library.js)
17. Copy the *entire* code from said tab and paste this inside your scenario script
18. Click the big yellow "SAVE" button at the top right (unbelievably important)
19. And you're done!
20. Keep in mind that any adventures played from your scenario will include Auto-Cards (this even applies retroactively)
## Useful Links
### Minimal demonstration
- https://play.aidungeon.com/scenario/Ddt0Akd-lVtj/auto-cards
### My AI Dungeon profile page
- https://play.aidungeon.com/profile/LewdLeah
### Auto-Cards discussion thread
- https://discord.com/channels/903327676884979802/1347300413652734064/1347300413652734064
- https://discord.gg/VJXwe7bj3A (AI Dungeon main Discord server, required to access the link above)
- Just ping me any time @LewdLeah to talk
