'use strict';

// Import the 'fs' (File System) module to handle file operations like reading and writing files
const fs = require('fs');

// Enable standard input stream to keep the process running and listen for input
process.stdin.resume();
process.stdin.setEncoding('utf-8'); // Set the input encoding to 'utf-8' to handle string input

// Declare variables to hold the input data and track the current line being read
let inputString = '';
let currentLine = 0;

// Event listener for reading data from the standard input (stdin)
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin; // Append incoming input data to 'inputString'
});

// Event listener for when the input ends (e.g., user sends an EOF signal or all input is received)
process.stdin.on('end', function() {
    // Split the input string by new lines to form an array of strings
    inputString = inputString.split('\n');
    main(); // Call the main function to start processing the input data
});

// Helper function to read each line of the input string array one-by-one
function readLine() {
    return inputString[currentLine++]; // Return the current line and increment the line counter
}

/*
 * Complete the 'mostStreamed' function below.
 *
 * This function is expected to return a STRING_ARRAY.
 * The function accepts the following parameters:
 *  1. Object_ARRAY videoLog - An array of objects where each object represents a video stream log with properties:
 *      - time: A Date object representing the timestamp of the stream
 *      - videoID: A string representing the unique identifier of the video
 *      - duration: An integer representing the duration (in minutes) that the video was streamed
 *  2. Date timeStamp - A Date object representing the specific timestamp up to which the most streamed videos are to be calculated
 */
function mostStreamed(videoLog, timeStamp) {
    // This function needs to be implemented to solve the given problem statement.
    // Logic should be added here to find the most streamed videos up to the given 'timeStamp'.
}

/*
 * The 'main' function handles the input/output operations and calls the 'mostStreamed' function.
 */
function main() {
    // Create a writable stream to write the output to a file (usually defined in the environment variable 'OUTPUT_PATH')
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // Read the first line of input and parse it as an integer, representing the number of video logs
    const videoLogCount = parseInt(readLine().trim(), 10);

    // Create an empty array to store the video log objects
    let videoLog = [];

    // Loop through the number of video logs and read each line to construct video log objects
    for (let i = 0; i < videoLogCount; i++) {
        // Read the current line and split it by comma to extract individual components
        const videoLogItem = readLine().split(',');
        const time = new Date(videoLogItem[0]); // Parse the first element as a Date object for the timestamp
        const videoID = videoLogItem[1]; // Second element is the videoID
        const duration = parseInt(videoLogItem[2], 10); // Third element is the duration, parsed as an integer
        // Create a video log object and add it to the videoLog array
        const videoLogObj = { time, videoID, duration };
        videoLog.push(videoLogObj);
    }

    // Read the next line as the reference timestamp and parse it as a Date object
    const timeStamp = new Date(readLine());

    // Call the 'mostStreamed' function with the video log array and the timestamp as arguments
    const result = mostStreamed(videoLog, timeStamp);

    // Write the result (array of strings) to the output stream, joining the elements with a newline character
    ws.write(result.join('\n') + '\n');

    // Close the writable stream to complete the file writing process
    ws.end();
}