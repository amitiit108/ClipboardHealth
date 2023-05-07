# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I made several changes to the original function to improve its readability:

1. I extracted the hashing and stringifying logic into separate functions, hashData and stringifyData. This makes the code more modular and easier to understand.
2. I removed the nested conditionals and replaced them with a single conditional statement for checking the existence of the event object. This simplifies the control flow and makes it easier to follow the logic.
3. I used a ternary operator to handle the case when the length of the partition key exceeds MAX_PARTITION_KEY_LENGTH. This makes the code more concise and easier to read.

By breaking the code into smaller, more focused functions and simplifying the control flow, the refactored version is more readable and easier to understand than the original.
