function calculateCubuesVolume(a, b){
    let volumeA, volumeB, result;

    volumeA = a * a * a;
    volumeB = b * b * b;
    
    result = volumeA + volumeB;

    return result;
}

resultVolumeOfCubues = calculateCubuesVolume(2, 3);
console.log(resultVolumeOfCubues);