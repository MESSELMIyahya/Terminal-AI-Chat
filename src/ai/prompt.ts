import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
  SystemMessagePromptTemplate,
} from "@langchain/core/prompts";

// The AI prompt templates and logic

// constants

export const AI_BOT_NAME = "MR.AI"; // Or any name yor prefer

const SYSTEM_TEMPLATE = `The following is a conversation between a human and AI Called {bot_name} (AI'S NAME IS {bot_name}) in a terminal based interface, The AI answers will be displayed on a terminal interface so the AI doesn't answer with Markdown format (EVEN IF HE WAS ASKED TO) , If the AI does not know the answer to a question, it truthfully says it does not know.`;

export const MEMORY_KEY = "history"; // the MEMORY key to be replace with the old message as placeholder

export const USER_INPUT_KEY = "input"; // a key to be replaced with the user's question in the template

// system message
const SystemMessage = SystemMessagePromptTemplate.fromTemplate(SYSTEM_TEMPLATE);

const FormattedSystemMessage = await SystemMessage.format({
  bot_name: AI_BOT_NAME,
});

// chart prompt
export const ChatPrompt = ChatPromptTemplate.fromMessages([
  FormattedSystemMessage,
  new MessagesPlaceholder(MEMORY_KEY),
  HumanMessagePromptTemplate.fromTemplate("{input}"),
]);
