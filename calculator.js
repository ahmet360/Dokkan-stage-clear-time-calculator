function calculateTotalTime(startStage, endStage, baseTime, increaseRate, additionalIncreaseInterval, additionalIncreaseRate) {
    let time = baseTime;
    let totalTime = 0;
    for (let stage = startStage; stage <= endStage; stage++) {
        if ((stage - 1) % additionalIncreaseInterval === 0 && stage > 1) {
            time *= 1 + additionalIncreaseRate / 100;  // Apply additional 5% increase every 5 stages
        }
        totalTime += time;
        time *= 1 + increaseRate;  // Apply the adjusted increase rate per stage
    }
    return totalTime;
}

function displayTotalTime() {
    const currentStage = parseInt(document.getElementById('currentStage').value);
    const targetStage = parseInt(document.getElementById('targetStage').value);
    const baseTimeStage1 = 20; // Base time in seconds for stage 1
    const adjustedIncreaseRate = 3.998040916498867e-06; // Adjusted increase rate per stage
    const additionalIncreaseInterval = 5; // Every 5 stages
    const additionalIncreaseRate = 5; // 5% additional increase

    const totalSeconds = calculateTotalTime(currentStage, targetStage, baseTimeStage1, adjustedIncreaseRate, additionalIncreaseInterval, additionalIncreaseRate);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('result').innerText = `Total time to clear from stage ${currentStage} to stage ${targetStage}: ${hours} hours, ${minutes} minutes, and ${seconds.toFixed(2)} seconds.`;
}
