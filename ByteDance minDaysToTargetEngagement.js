'use strict';

// Import the 'fs' (File System) module to handle file operations like writing the output to a file
const fs = require('fs');

// Set up the process to read from standard input (stdin) and keep the process running until input ends
process.stdin.resume();
process.stdin.setEncoding('utf-8'); // Set input encoding to 'utf-8' to handle string input

// Declare variables to store the input data and track the current line being read
let inputString = '';
let currentLine = 0;

// Event listener for 'data' event: triggered every time new input data is received
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin; // Append the received input data to the 'inputString' variable
});

// Event listener for 'end' event: triggered when all input has been received (e.g., EOF)
process.stdin.on('end', function() {
    // Split the input string into an array of strings, separated by new lines
    inputString = inputString.split('\n');
    
    // Call the main function to start processing the input data
    main();
});

// Helper function to read each line of input one-by-one and return it as a string
function readLine() {
    return inputString[currentLine++]; // Return the current line and increment the line counter
}

/*
 * The 'minDaysToTargetEngagement' function is expected to return a LONG_INTEGER value.
 * The function is designed to calculate the minimum number of days required to reach or exceed the target engagement score.
 *
 * Parameters:
 *  1. initialEngagementScore: The initial engagement score of a user (LONG_INTEGER).
 *  2. targetEngagementScore: The desired engagement score to be achieved (LONG_INTEGER).
 *  3. trainingEngagementScore: An array of long integers representing the engagement score increase possible from various training sessions.
 *
 * Implementation for this function needs to be provided as part of the solution.
 */
function minDaysToTargetEngagement(initialEngagementScore, targetEngagementScore, trainingEngagementScore) {
    let n = trainingEngagementScore.length;
    
    // Create a DP array to track the minimum days required to reach each engagement score
    let dp = Array(targetEngagementScore + 1).fill(Infinity);
    dp[initialEngagementScore] = 0;

    for (let i = initialEngagementScore; i <= targetEngagementScore; i++) {
        if (dp[i] == Infinity) continue;

        // Option 1: Increase the engagement score by 1 each day
        if (i + 1 <= targetEngagementScore) {
            dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
        }

        // Option 2: Use each training score to train the AI model
        for (let score of trainingEngagementScore) {
            if (i + score <= targetEngagementScore) {
                dp[i + score] = Math.min(dp[i + score], dp[i] + 1);
            }
        }
    }

    return dp[targetEngagementScore];
}

/*
 * The 'main' function handles the input and output processing.
 * It reads input values, processes them, and calls the 'minDaysToTargetEngagement' function.
 */
function main() {
    // Create a writable stream to write the output to a file specified in the environment variable 'OUTPUT_PATH'
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // Read the first line of input, parse it as an integer, and store it as 'initialEngagementScore'
    const initialEngagementScore = parseInt(readLine().trim(), 10);

    // Read the second line of input, parse it as an integer, and store it as 'targetEngagementScore'
    const targetEngagementScore = parseInt(readLine().trim(), 10);

    // Read the third line of input, parse it as an integer, and store it as 'trainingEngagementScoreCount'
    // This variable represents the number of training sessions available
    const trainingEngagementScoreCount = parseInt(readLine().trim(), 10);

    // Initialize an empty array to store the engagement scores for each training session
    let trainingEngagementScore = [];

    // Read the next 'trainingEngagementScoreCount' lines and store each value in the 'trainingEngagementScore' array
    for (let i = 0; i < trainingEngagementScoreCount; i++) {
        // Read the current line, parse it as an integer, and add it to the 'trainingEngagementScore' array
        const trainingEngagementScoreItem = parseInt(readLine().trim(), 10);
        trainingEngagementScore.push(trainingEngagementScoreItem);
    }

    // Call the 'minDaysToTargetEngagement' function with the parsed input values and store the result
    const result = minDaysToTargetEngagement(initialEngagementScore, targetEngagementScore, trainingEngagementScore);

    // Write the result to the output stream, followed by a newline character
    ws.write(result + '\n');

    // Close the writable stream to complete the file writing process
    ws.end();
}