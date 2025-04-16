# Terminal AI Chat

A terminal-based AI chat application built using Langchain.js . This application allows you to have interactive conversations with an AI directly in your terminal.

## Features

- Interactive terminal-based chat interface
- Powered by Google's Gemini AI model (You can use any LLM model you prefer)
- Persistent conversation memory
- Simple command interface with `/exit` and `/clear` commands
- Clean and minimal terminal UI

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google AI API key (Gemini) (Or any other LLM model e.g OpenIA)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MESSELMIyahya/Terminal-AI-Chat
cd Terminal-AI-Chat
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google (Or any other LLM model ) AI API key:

```env
MODEL_API_SECRET_KEY=your_google_ai_api_key_here
```

## Building and Running

### Development Mode

To run the application in development mode (with hot reload):

```bash
npm run dev
```

### Production Build

To build the application for production:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

## Usage

Once the application is running, you can start chatting with the AI. Here are some example interactions:

```
=================================================================
==================[Welcome To Terminal AI Chat]==================
=================================================================

Question -> hello , my name is Yahya Messelmi

MR.AI -> Hello Yahya Messelmi, it's nice to meet you. I am MR.AI. How can I help you today?

Question ->  what is vue js ?

MR.AI -> Vue.js is a tool for building interactive websites. Think of it like LEGOs for web pages. You can create small, reusable pieces (called components) and put them together to build bigger, more complex interfaces. It's easy to learn and helps you keep your website organized and responsive.

Question -> /clear
[Terminal clears]

Question -> /exit
[Application exits]
```

## Available Commands

- `/exit` - Exits the chat application
- `/clear` - Clears the terminal screen

## Project Structure

```
src/
├── ai/
│   ├── chain.ts    # AI conversation chain configuration
│   ├── model.ts    # AI model setup
│   └── prompt.ts   # Chat prompt templates
├── terminal.ts     # Terminal interaction logic
└── index.ts        # Main application entry point
```

## Dependencies

- @langchain/core
- @langchain/google-genai
- dotenv
- langchain
- nodemon (dev)
- ts-node (dev)
- @types/node (dev)

## License

ISC
