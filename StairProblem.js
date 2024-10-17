function climbStairs(n) {
    // Base cases
    if (n <= 1) return 1;

    // Variables to store the previous two values
    let prev1 = 1; // ways to climb 1 step
    let prev2 = 1; // ways to climb 0 steps

    // Calculate number of ways to climb stairs for each number of steps up to n
    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    // The answer is stored in prev1
    return prev1;
}

// Example Usage:
const n = 5; // Number of steps
console.log(climbStairs(n)); // Output: 8