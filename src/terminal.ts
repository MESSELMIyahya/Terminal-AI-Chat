import ReadLine from "node:readline";

// The Terminal Logic And Function

// A function to read the user input from the terminal with printing using the the node built-in 'node:readline' package a message

export async function TerminalReactUserInput(
  message: string, // message to be printed before the user input
  callback: ((input: string) => boolean) | ((input: string) => Promise<boolean>) // a callback function that will be called with the user input passed after the user input action and returns a boolean to break the loop
): Promise<boolean> {
  // the read line interface
  const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // the 'node:readline' 'question' function doesn't support asynchronous so we have to wrap the function in a Promise because we'll use it a while loop

  return await new Promise((res) => {
    rl.question(message, async (input: string) => {
      const _break = await callback(input); // call the callback with the 'input'
      // close the readline
      rl.close();
      // resolve the promise
      res(_break || false);
    });
  });
}
