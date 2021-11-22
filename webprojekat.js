function generateIntensityOfSunlight(season,timeOfTheDay){
    if(season === "winter"){
        if(timeOfTheDay === "morning"){
            let arr = [];
            let max = 30; // Gornja i donja granica za niz koji zelimo da generisemo
            let min = 0;
            let labels =[]; //promenjiva koja prikuplja vrednosti vremena 
            for(let i = 5; i < 12;i++){
                let sunlightInMorning = Math.floor(Math.random() * (max - min + 1) + min); // generisanje random vrednosti u opsegu od 0-30
                arr.push(sunlightInMorning); // dodavanje generisane vrednosi u niz 
                labels.push(`${i}AM`); // dodavanje vrednosti vremena u niz kao string
            }
            let mostSunlinght = Math.max.apply(null,arr); //promenjiva koja uzima vrednost najvece vrednosit iz niza 
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`; // prikaz maksimalne vrednosti u HTML
            let shades = positionOfShades(arr); // poziv funkcije koja simulira blokiranje svetlosti
            return {data:arr,labels:labels,shades:shades}; // vracanje objekata 
        }

        else if(timeOfTheDay === "noon"){
            let arr = [];
            let max = 70;
            let min = 30;
            let labels =[];
            for(let i = 12; i < 19; i++){
                let sunlightInNoon = Math.floor(Math.random() * (max - min + 1) + min);
                arr.push(sunlightInNoon);
                if(i === 12){
                    time = i;
                    timeIndex = "AM";
                }else{
                    time = i - 12;
                    timeIndex = "PM";
                }
                labels.push(`${time} ${timeIndex}`);
            }
            let mostSunlinght = Math.max.apply(null,arr);
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arr);
            return {data:arr,labels:labels,shades:shades};
        }

        else if(timeOfTheDay === "night"){
            let arr = [];
            let max = 10;
            let min = 0;
            let labels = [];
            for(let i = 7; i < 17; i++){
                let sunlightInNight = Math.floor(Math.random() * (max - min + 1) + min);
                arr.push(sunlightInNight);
                if(i <= 12){
                    time = i;
                    timeIndex = "PM";
                }else{
                    time = i-12;
                    timeIndex = "AM";
                }
                labels.push(`${time} ${timeIndex}`);
            }
            let mostSunlinght = Math.max.apply(null,arr);
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arr);
            return {data:arr,labels:labels,shades:shades};
        }

        else {
            console.log("error"); // zastita od pogresnog izbora
        }
    }
    else if(season === "summer"){
        if(timeOfTheDay === "morning"){
            let arr = [];
            let max = 50;
            let min = 10;
            let labels = [];
            for(let i = 5; i < 12;i++){
                let sunlightInMorning = Math.floor(Math.random() * (max - min + 1) + min);
                arr.push(sunlightInMorning);
                labels.push(`${i}AM`);
            }
            let mostSunlinght = Math.max.apply(null,arr);
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arr);
            return {data:arr,labels:labels,shades:shades};

        }
        else if(timeOfTheDay === "noon"){
            let arr = [];
            let max = 100;
            let min = 50;
            let labels = [];
            for(let i = 12; i < 19; i++){
                let sunlightInNoon = Math.floor(Math.random() * (max - min + 1) + min);
                arr.push(sunlightInNoon);
                if(i === 12){
                    time = i;
                    timeIndex = "AM";
                }else{
                    time = i - 12;
                    timeIndex = "PM";
                }
                labels.push(`${time} ${timeIndex}`);
            }
            let mostSunlinght = Math.max.apply(null,arr);
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arr);
            return {data:arr,labels:labels,shades:shades};

        }
        else if(timeOfTheDay === "night"){
            var arr = [];
            let max = 30;
            let min = 0;
            let labels = [];
            for(let i = 7; i < 17; i++){
                let sunlightInNight = Math.floor(Math.random() * (max - min + 1) + min);
                arr.push(sunlightInNight);
                if(i <= 12){
                    time = i;
                    timeIndex = "PM";
                }else{
                    time = i-12;
                    timeIndex = "AM";
                }
                labels.push(`${time} ${timeIndex}`);
            }
            let mostSunlinght = Math.max.apply(null,arr);
            console.log("Highest brightness was: " + mostSunlinght + "%");
            document.getElementById("maxValue").innerHTML = `Max brightness value: ${mostSunlinght}%`;
            let shades = positionOfShades(arr);
            return {data:arr,labels:labels,shades:shades};
        }
        
        else {
            console.log("error"); // zastita od pogresnog izbora
        }
    }

    else {
        console.log("error"); // zastita od pogresnog izbora
    }   
}
//funkcija koja simulira roletnu
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
        else{
            console.log("error"); // zastita od pogresnog izbora
        }
    }
    return shades;
}

//pritisak na dugme simulate
document.getElementById("simulate").onclick = function() {
    
    var season = document.getElementById("season").value; //odabir sezone
    var timeOfTheDay = document.getElementById("timeOfTheDay").value; //odabir dela dana
    let {data,labels,shades} = generateIntensityOfSunlight(season,timeOfTheDay); //simulacija 
    drawGraph(season,data,labels,'container1','External illumination'); //grafik koji prikazuje generisane vrednosti sunceve svetlosti i vreme
    drawGraph(season,shades,labels,'container2','Dimming of light'); //grafik koji prikazuje vrednosti funkcije roletne i vreme
};
