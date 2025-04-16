import { config } from "dotenv";
// config the .env
config();

import { TerminalReactUserInput } from "./terminal.js";
import { AI_BOT_NAME } from "./ai/prompt.js";
import { AIChain } from "./ai/chain.js";

// constant

// a prompt to exist the chat
const EXIST_PROMPT = "/exit";

// a prompt the clear the terminal (clearing the terminal not the chat memory)
const CLEAR_PROMPT = "/clear";

const USER_PROMPT_STARTER = "Question -> ";

const AI_ANSWER_STARTER = `${AI_BOT_NAME} -> `;

// a function to start the app
async function startChat() {
  //  clear the app before printing the chat header
  console.clear();

  // logging a header for the chat
  console.log(
    `=================================================================`
  );
  console.log(
    `==================[Welcome To Terminal AI Chat]==================`
  );
  console.log(
    `=================================================================\n`
  );

  // using a while loop to create a continues chat until the user exists it using the '/exit' prompt
  app_loop: while (true) {
    try {
      // invoking the chain with the 'input'
      const shouldBreak = await TerminalReactUserInput(
        USER_PROMPT_STARTER,
        async (input) => {
          // check if the user's input equals one of the action prompts

          if (input.trim() == EXIST_PROMPT) {
            return true; // to break the loop *NOTE - See The 'TerminalReactUserInput' function implementation To understand
          } else if (input.trim() == CLEAR_PROMPT) {
            console.clear();
            return false;
          }

          const answer = await AIChain.invoke({
            input,
          });

          // logging the AI answer or response
          console.log(`\n${AI_ANSWER_STARTER}`, answer.response);
        }
      );

      // if the 'shouldBreak' is 'true' break the loop
      if (shouldBreak) {
        break app_loop;
      }
    } catch (err) {
      console.error("SOMETHING WENT WRONG");
      break app_loop;
    }
  }

  // to exist the node app
  process.exit(0);
}

// start the program
startChat();
