/// <reference no-default-lib="true"/>
/// <reference lib="es2022"/>

export interface History {
  text: string;
  type: "continue" | "say" | "do" | "story" | "see" | "repeat" | "start" | "unknown";
  rawText: string;
}

export interface StoryCard {
  id: string;
  title: string;
  keys: string;
  type: string;
  /**
   * This is `value` when exported
   */
  entry: string;
  description: string;
}

export interface State {
  key: string;
  memory: Memory;
  message: string;
  [key: string]: unknown;
}
export interface Memory {
  context: string;
  authorsNote: string;
}
export interface Info {
  actionCount: number;
  characters: string[];
  [key: string]: unknown;
}

declare global {
  let stop: boolean;
  let text: unknown;
  function AutoCards(): unknown;
  function addStoryCard(): unknown;
  function removeStoryCard(): unknown;
  function log(): void;
  const history: History[];
  const storyCards: StoryCard[];
  const state: State;
  const memory: Memory;
  const info: Info;
}
