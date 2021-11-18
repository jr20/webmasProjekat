function generateIntensityOfSunlight(season,timeOfTheDay){
    if(season === "winter"){
        if(timeOfTheDay === "morning"){
            var arrSunlightMorning = [];
            console.log("5AM Winter Morning");
            let maxMorning = 30;
            let minMorning = 0;
            let labels =[];
            for(let i = 5; i < 12;i++){
                let sunlightInMorning = Math.floor(Math.random() * (maxMorning - minMorning + 1) + minMorning);
                arrSunlightMorning.push(sunlightInMorning);
                labels.push(`${i}AM`);
                console.log("At: " + i + "AM"+ " " + "Sunlight intesity is: " + sunlightInMorning + "%");

            }
            let mostSunlinght = Math.max.apply(null,arrSunlightMorning);
            console.log("Highest brightness was: " + mostSunlinght + "%");
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arrSunlightMorning);
            return {data:arrSunlightMorning,labels:labels,shades:shades};


        }
        else if(timeOfTheDay === "noon"){
            var arrSunlightNoon = [];
            console.log("12PM Winter Noon");
            let maxNoon = 70;
            let minNoon = 30;
            let labels =[];
            for(let n = 12; n < 19; n++){
                let sunlightInNoon = Math.floor(Math.random() * (maxNoon - minNoon + 1) + minNoon);
                arrSunlightNoon.push(sunlightInNoon);
                if(n === 12){
                    time = n;
                    timeIndex = "AM";
                }else{
                    time = n - 12;
                    timeIndex = "PM";
                }
                labels.push(`${time} ${timeIndex}`);
                console.log("At: " + time + timeIndex + " " + "Sunlight intesity is: " + sunlightInNoon + "%");
            }
            let mostSunlinght = Math.max.apply(null,arrSunlightNoon);
            console.log("Highest brightness was: " + mostSunlinght + "%");
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arrSunlightNoon);
            return {data:arrSunlightNoon,labels:labels,shades:shades};

        }
        else if(timeOfTheDay === "night"){
            var arrSunlightNight = [];
            console.log("7PM Winter Night");
            let maxNight = 10;
            let minNight = 0;
            let labels = [];
            for(let j = 7; j < 17; j++){
                let sunlightInNight = Math.floor(Math.random() * (maxNight - minNight + 1) + minNight);
                arrSunlightNight.push(sunlightInNight);
                if(j <= 12){
                    time = j;
                    timeIndex = "PM";
                }else{
                    time = j-12;
                    timeIndex = "AM";
                }
                labels.push(`${time} ${timeIndex}`);
                console.log("At: " + time + timeIndex + " " + "Sunlight intesity is: " + sunlightInNight + "%");
            }
            let mostSunlinght = Math.max.apply(null,arrSunlightNight);
            console.log("Highest brightness was: " + mostSunlinght + "%");
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arrSunlightNight);
            return {data:arrSunlightNight,labels:labels,shades:shades};
        }
    }
    else if(season === "summer"){
        if(timeOfTheDay === "morning"){
            var arrSunlightMorning = [];
            console.log("5AM Summer Morning");
            let maxMorning = 50;
            let minMorning = 10;
            let labels = [];
            for(let i = 5; i < 12;i++){
                let sunlightInMorning = Math.floor(Math.random() * (maxMorning - minMorning + 1) + minMorning);
                arrSunlightMorning.push(sunlightInMorning);
                labels.push(`${i}AM`);
                console.log("At: " + i + "AM"+ " " + "Sunlight intesity is: " + sunlightInMorning + "%");

            }
            let mostSunlinght = Math.max.apply(null,arrSunlightMorning);
            console.log("Highest brightness was: " + mostSunlinght + "%");
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arrSunlightMorning);
            return {data:arrSunlightMorning,labels:labels,shades:shades};

        }
        if(timeOfTheDay === "noon"){
            var arrSunlightNoon = [];
            console.log("12PM Summer Noon");
            let maxNoon = 100;
            let minNoon = 50;
            let labels = [];
            for(let n = 12; n < 19; n++){
                let sunlightInNoon = Math.floor(Math.random() * (maxNoon - minNoon + 1) + minNoon);
                arrSunlightNoon.push(sunlightInNoon);
                if(n === 12){
                    time = n;
                    timeIndex = "AM";
                }else{
                    time = n - 12;
                    timeIndex = "PM";
                }
                labels.push(`${time} ${timeIndex}`);
                console.log("At: " + time + timeIndex + " " + "Sunlight intesity is: " + sunlightInNoon + "%");
            }
            let mostSunlinght = Math.max.apply(null,arrSunlightNoon);
            console.log("Highest brightness was: " + mostSunlinght + "%");
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arrSunlightNoon);
            return {data:arrSunlightNoon,labels:labels,shades:shades};

        }
        if(timeOfTheDay === "night"){
            var arrSunlightNight = [];
            console.log("7PM Summer Night");
            let maxNight = 30;
            let minNight = 0;
            let labels = [];
            for(let j = 7; j < 17; j++){
                let sunlightInNight = Math.floor(Math.random() * (maxNight - minNight + 1) + minNight);
                arrSunlightNight.push(sunlightInNight);
                if(j <= 12){
                    time = j;
                    timeIndex = "PM";
                }else{
                    time = j-12;
                    timeIndex = "AM";
                }
                labels.push(`${time} ${timeIndex}`);
                console.log("At: " + time + timeIndex + " " + "Sunlight intesity is: " + sunlightInNight + "%");
            }
            let mostSunlinght = Math.max.apply(null,arrSunlightNight);
            console.log("Highest brightness was: " + mostSunlinght + "%");
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arrSunlightNight);
            return {data:arrSunlightNight,labels:labels,shades:shades};
            
        }
    }
}
function positionOfShades(arr){
    let shades = [];
    for(let i=0;i<=arr.length;i++){
    
        if(arr[i] < 20){
            console.log("Shades are on 0%");
            shades.push(0);
        }

        else if(arr[i] <= 30){
            console.log("Shades are on 25%");
            shades.push(25);
        }
        else if(arr[i] <= 60){
            console.log("Shades are on 50%");
            shades.push(50);

        }
        else if(arr[i] <= 90){
            console.log("Shades are on 75%");
            shades.push(75);
        }
        else if(arr[i] <=100){
            console.log("Shades are on 100%");
            shades.push(100);
        }
    }
    return shades;
}

document.getElementById("simulate").onclick = function() {
    
    var season = document.getElementById("season").value;
    var timeOfTheDay = document.getElementById("timeOfTheDay").value;
    let {data,labels,shades} = generateIntensityOfSunlight(season,timeOfTheDay)
    drawGraph(season,data,labels,'container1','External illumination');
    drawGraph(season,shades,labels,'container2','Dimming of light');
};
