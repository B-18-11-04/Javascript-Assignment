tb = 170
bb = 90

    let bmi = bb / tb * tb
    if (bmi < 18.5) {
        console.log("Rhodey kurang gizi");
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Rhodey normal");
    }
    if (bmi >= 25.0 && bmi <= 29.9) {
        console.log("Rhodey berat lebih");
    }
    if (bmi >= 30) {
        console.log("Rhodey obesitas");
    }
