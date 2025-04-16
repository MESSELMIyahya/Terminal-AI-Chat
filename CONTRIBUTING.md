# Contributing to Terminal AI Chat

Thank you for your interest in contributing to Terminal AI Chat! This document provides guidelines and instructions for contributing to this project.

## How to Contribute

1. **Fork the Repository**

   - Click the "Fork" button on the top right of the repository page
   - Clone your forked repository to your local machine

2. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**

   - Follow the project's coding style
   - Write clear commit messages
   - Test your changes thoroughly

4. **Submit a Pull Request**
   - Push your changes to your fork
   - Create a pull request to the main repository
   - Provide a clear description of your changes

## Development Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a `.env` file with your API key:

   ```env
   MODEL_API_SECRET_KEY=your_api_key_here
   ```

3. Run in development mode:
   ```bash
   npm run dev
   ```

## Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Keep functions and components focused and single-purpose
- Add appropriate comments for complex logic

## Pull Request Guidelines

- Ensure your PR description clearly explains the changes
- Link any related issues
- Make sure all tests pass
- Keep PRs focused and manageable in size
- Update documentation if necessary

## Reporting Issues

When reporting issues, please include:

- A clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (OS, Node version, etc.)

## TODO & In-Progress Tasks

### High Priority

- [ ] Add unit tests for core functionality
- [ ] Implement file-based memory system to persist conversations between sessions
- [ ] Create memory management utilities for backup/restore

### Medium Priority

- [ ] Add support for more LLM providers
- [ ] Implement error handling for API key validation
- [ ] Create a configuration system for different AI models
- [ ] Add support for multiple memory storage options (file, Redis, SQLite)
- [ ] Improve the terminal chat interface
- [ ] Add conversation history persistence
- [ ] Implement rate limiting for API calls

### Low Priority

- [ ] Add syntax highlighting for code blocks
- [ ] Implement conversation export/import

### In Progress

- [ ] Improving error messages and user feedback
- [ ] Documentation updates and examples

Feel free to pick up any of these tasks or suggest new ones by opening an issue!

## Questions?

Feel free to open an issue if you have any questions about contributing to the project.
