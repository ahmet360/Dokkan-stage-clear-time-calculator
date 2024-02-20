function calculatePercentageIncrease(startTime, endTime, stages) {
    return ((endTime / startTime) ** (1 / stages) - 1) * 100;
}

function totalTimeToClear(startStage, endStage, baseTime, increaseRate, additionalIncreaseInterval, additionalIncreaseRate) {
    let time = baseTime;
    let totalTime = 0;
    for (let stage = startStage; stage <= endStage; stage++) {
        if ((stage - 1) % additionalIncreaseInterval === 0 && stage > 1) {
            time *= 1 + additionalIncreaseRate / 100;
        }
        totalTime += time;
        time *= 1 + increaseRate / 100;
    }
    return totalTime;
}

function calculateTime() {
    const currentStage = parseInt(document.getElementById('currentStage').value);
    const targetStage = parseInt(document.getElementById('targetStage').value);
    const baseTimeStage1 = 20; // 20 seconds for stage 1
    const timeStage786 = 1 * 60 + 7 + 0.008; // Time for stage 786 in seconds
    const totalStages = 786 - 1;
    const increaseRate = calculatePercentageIncrease(baseTimeStage1, timeStage786, totalStages);
    const additionalIncreaseInterval = 10; // Every 5 stages
    const additionalIncreaseRate = 5; // 5% additional increase

    const totalSeconds = totalTimeToClear(currentStage, targetStage, baseTimeStage1, increaseRate, additionalIncreaseInterval, additionalIncreaseRate);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('result').innerText = `Total time to clear from stage ${currentStage} to stage ${targetStage}: ${hours} hours, ${minutes} minutes, and ${seconds.toFixed(2)} seconds.`;
}
