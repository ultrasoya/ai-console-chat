# AI Console Chat

A dynamic console-based chat application that allows you to interact with AI models through OpenRouter API. The unique feature of this application is the ability to change the AI's system role on-the-fly during a conversation, allowing you to experiment with different AI personalities and behaviors in real-time.

## Features

- 🤖 **Dynamic System Role Switching**: Change the AI's behavior and personality during conversation
- 💬 **Conversation History**: Maintains context throughout the session
- 🎯 **Multiple AI Personalities**: Switch between different roles like poet, programmer, teacher, etc.
- 🛠️ **Easy Commands**: Simple slash commands for all operations
- 📝 **Context Preservation**: AI remembers the conversation history even when changing roles

## Prerequisites

- Node.js (version 16 or higher)
- OpenRouter API key

## Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your OpenRouter API key:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   ```

## Usage

### Basic Usage

Start the application:
```bash
node example.mjs
```

Or with a custom initial system role:
```bash
node example.mjs "You are a creative writer who loves poetry"
```

### Available Commands

| Command | Description | Example |
|---------|-------------|---------|
| `/setrole <role>` | Change the AI's system role | `/setrole You are a Python programming expert` |
| `/showrole` | Display current system role | `/showrole` |
| `/clear` | Clear conversation history | `/clear` |
| `/help` | Show available commands | `/help` |
| `exit` | Exit the application | `exit` |

### Example Session

```
💬 Enter a message: /help

🤖 Available commands:
/setrole <new role> - change system role
/showrole - show current system role
/clear - clear message history
/help - show this help
exit - exit the program

💡 Example: /setrole You are a creative writer who loves poetry.

💬 Enter a message: Hello, how are you?

🤔 Thinking...

🤖 Hello! I'm doing well, thank you for asking. I'm here to help you with any questions or tasks you might have. How can I assist you today?

💬 Enter a message: /setrole You are a Shakespearean poet who speaks in iambic pentameter

✅ System role successfully changed!

📋 Current system role: You are a Shakespearean poet who speaks in iambic pentameter

💬 Enter a message: Tell me about love

🤔 Thinking...

🤖 O fairest maiden, lend thine ear to me,
As I shall speak of love's sweet mystery.
'Tis like a rose that blooms in spring's embrace,
With petals soft and fragrance full of grace.

Love's gentle touch doth make the heart to sing,
Like larks that soar on morning's golden wing.
It lifts the soul from sorrow's darkest night,
And fills the world with pure and wondrous light.

💬 Enter a message: /setrole You are a Python programming expert

✅ System role successfully changed!

📋 Current system role: You are a Python programming expert

💬 Enter a message: How do I create a list comprehension?

🤔 Thinking...

🤖 List comprehensions in Python are a concise way to create lists based on existing sequences. Here's the basic syntax:

```python
# Basic syntax: [expression for item in iterable]
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
# Result: [1, 4, 9, 16, 25]

# With condition: [expression for item in iterable if condition]
even_squares = [x**2 for x in numbers if x % 2 == 0]
# Result: [4, 16]
```

💬 Enter a message: exit

👋 Goodbye!
```

## System Role Examples

Here are some interesting system roles you can try:

### Creative Roles
- `"You are a creative writer who loves poetry"`
- `"You are a Shakespearean poet who speaks in iambic pentameter"`
- `"You are a science fiction author who creates vivid worlds"`

### Professional Roles
- `"You are a Python programming expert"`
- `"You are a data scientist who explains complex concepts simply"`
- `"You are a business consultant who gives strategic advice"`

### Educational Roles
- `"You are a patient teacher who explains math concepts step by step"`
- `"You are a history professor who makes the past come alive"`
- `"You are a language tutor who helps with English grammar"`

### Fun Roles
- `"You are a stand-up comedian who tells witty jokes"`
- `"You are a fortune teller who reads tarot cards"`
- `"You are a medieval knight who speaks in old English"`

## Configuration

### Environment Variables

- `OPENROUTER_API_KEY`: Your OpenRouter API key (required)

### Default Model

The application uses `openai/gpt-4o-mini` by default. You can modify the model in the code if needed.

## Troubleshooting

### Common Issues

1. **"Error sending message"**: Check your OpenRouter API key and internet connection
2. **"Unknown command"**: Make sure to use the correct slash commands (e.g., `/help`)
3. **API rate limits**: OpenRouter has rate limits; wait a moment if you hit them

### Getting Help

- Use `/help` command in the application
- Check your `.env` file configuration
- Ensure you have a valid OpenRouter API key

## Contributing

Feel free to contribute to this project by:
- Adding new features
- Improving the user interface
- Adding more system role examples
- Fixing bugs

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with OpenRouter API
- Uses OpenAI's GPT models
- Inspired by the need for dynamic AI personality switching
