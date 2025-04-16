import { ConversationChain } from "langchain/chains";
import { AIModel } from "./model.js";
import { ChatPrompt, MEMORY_KEY } from "./prompt.js";
import { BufferMemory } from "langchain/memory";

// The AI conversation chian config and logic

export const AIChain = new ConversationChain({
  llm: AIModel,
  prompt: ChatPrompt,
  memory: new BufferMemory({ returnMessages: true, memoryKey: MEMORY_KEY }),
});


