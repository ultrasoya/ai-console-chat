import 'dotenv/config';
import OpenAI from "openai";
import readline from "readline";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

let systemRole = process.argv[2] || "You are a helpful assistant.";

let messageHistory = [
    {
        "role": "system",
        "content": systemRole,
    }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showCurrentSystemRole() {
    console.log(`\n📋 Current system role: ${systemRole}\n`);
}

function showHelp() {
    console.log(`
🤖 Available commands:
/setrole <new role> - change system role
/showrole - show current system role
/clear - clear message history
/help - show this help
exit - exit the program

💡 Example: /setrole You are a creative writer who loves poetry.
`);
}

rl.setPrompt("💬 Enter a message: ");
rl.prompt();

showCurrentSystemRole();

rl.on("line", async (input) => {
    const trimmedInput = input.trim();
    
    if (trimmedInput.toLowerCase() === "exit") {
        rl.close();
        return;
    }
    
    if (trimmedInput.startsWith("/")) {
        const [command, ...args] = trimmedInput.split(" ");
        
        switch (command.toLowerCase()) {
            case "/setrole":
                if (args.length === 0) {
                    console.log("❌ Please specify a new system role");
                    console.log("💡 Example: /setrole You are a creative writer");
                    break;
                }
                
                const newRole = args.join(" ");
                systemRole = newRole;
                
                messageHistory[0] = {
                    "role": "system",
                    "content": systemRole,
                };
                
                console.log("✅ System role successfully changed!");
                showCurrentSystemRole();
                break;
                
            case "/showrole":
                showCurrentSystemRole();
                break;
                
            case "/clear":
                messageHistory = [
                    {
                        "role": "system",
                        "content": systemRole,
                    }
                ];
                console.log("🧹 Message history cleared!");
                break;
                
            case "/help":
                showHelp();
                break;
                
            default:
                console.log("❌ Unknown command. Type /help for help");
                break;
        }
        
        rl.prompt();
        return;
    }
    
    if (trimmedInput.length === 0) {
        rl.prompt();
        return;
    }
    
    try {
        messageHistory.push({
            "role": "user",
            "content": trimmedInput
        });
        
        console.log("🤔 Thinking...");
        
        const completion = await client.chat.completions.create({
            model: "openai/gpt-4o-mini",
            messages: messageHistory
        });
        
        const assistantMessage = completion.choices[0].message.content;
        
        messageHistory.push({
            "role": "assistant",
            "content": assistantMessage
        });
        
        console.log(`\n🤖 ${assistantMessage}\n`);
        
    } catch (error) {
        console.error("❌ Error sending message:", error.message);
    }
    
    rl.prompt();
});

rl.on("close", () => {
    console.log("👋 Goodbye!");
    process.exit(0);
});