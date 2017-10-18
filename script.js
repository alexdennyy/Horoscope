function onSubmit(){
    var month = document.getElementById("selectBoxMonth").value;
    var day = document.getElementById("selectBoxDay").value;
    var name = document.getElementById("myName").value;
    var year = document.getElementById("selectBoxYear").value;
    console.log(day);
    day = parseInt(day);
    year = parseInt(year);
    console.log(year);
    if(month == "opt2"){
        if(day > 28){
            console.log("Invalid date");
            window.alert("Please enter a valid date");
        }
    }
    if(month == "opt4" || month == "opt6" || month == "opt9" || month == "opt11"){
        if(day > "30"){
            console.log("Invalid date");
            window.alert("Please enter a valid date");
        }
    }
    var sign = determineSign(day, month);
    var horoscope = (name + ", your horoscope is: " + determineHoroscope(sign));
    document.getElementById("zodiacOutput").innerHTML = "Your zodiac birth year is year of the " + determineYear(year);
    document.getElementById("output").innerHTML = horoscope;
}

function determineSign(day, month){
    var sign = "";
    if(month == "opt1"){
        if(day > "19"){
            sign = "Aquarius";
        } else {
            sign = "Capricorn";
        }
    }
    if(month == "opt2"){
        if(day > "18"){
            sign = "Pisces";
        } else {
            sign = "Aquarius";
        }
    }
    if(month == "opt3"){
        if(day > "21"){
            sign = "Aries";
        } else {
            sign = "Pisces";
        }
    }
    if(month == "opt4"){
        if(day > "19"){
            sign = "Taurus";
        } else {
            sign = "Aries";
        }
    }
    if(month == "opt5"){
        if(day > "20"){
            sign = "Gemini";
        } else {
            sign = "Taurus";
        }
    }
    if(month == "opt6"){
        if(day > "20"){
            sign = "Cancer";
        } else {
            sign = "Gemini";
        }
    }
    if(month == "opt7"){
        if(day > "22"){
            sign = "Leo";
        } else {
            sign = "Cancer";
        }
    }
    if(month == "opt8"){
        if(day > "22"){
            sign = "Virgo";
        } else {
            sign = "Leo";
        }
    }
    if(month == "opt9"){
        if(day > "22"){
            sign = "Libra";
        } else {
            sign = "Virgo";
        }
    }
    if(month == "opt10"){
        if(day > "22"){
            sign = "Scorpio";
        } else {
            sign = "Libra";
        }
    }
    if(month == "opt11"){
        if(day > "21"){
            sign = "Sagittarius";
        } else {
            sign = "Scorpio";
        }
    }
    if(month == "opt12"){
        if(day > "21"){
            sign = "Capricorn";
        } else {
            sign = "Sagittarius";
        }
    }
    return sign;
}

function determineHoroscope(sign){
    if(sign == "Capricorn"){
        document.getElementById("horoscopeImage").src="img/Capricorn.png";
        return "You will see lots of challenges today, but the people around you will help you pull through it.";
    }
    if(sign == "Aquarius"){
        document.getElementById("horoscopeImage").src="img/Aquarius.png";
        return "Today is the day you finally are motivated enough to complete that project you've been putting off.";
    }
    if(sign == "Pisces"){
        document.getElementById("horoscopeImage").src="img/Pisces.png";
        return "You're going to have a really shitty day.";
    }
    if(sign == "Aries"){
        document.getElementById("horoscopeImage").src="img/Aries.png";
        return "Today is going to be the day you consider an important day.";
    }
    if(sign == "Taurus"){
        document.getElementById("horoscopeImage").src="img/Taurus.png";
        return "Be careful where you step because your planet is in retrograde, so the waters may be deep, ya know?";
    }
    if(sign == "Gemini"){
        document.getElementById("horoscopeImage").src="img/Gemini.png";
        return "Make sure to surround yourself with positive vibes as today is the day where you need to double down and focus on yourself";
    }
    if(sign == "Cancer"){
        document.getElementById("horoscopeImage").src="img/Cancer.png";
        return "You are planning to do something and there is always a chance something will happen with those plans. Prepare for the best, and the worst. It is yet to come.";
    }
    if(sign == "Leo"){
        document.getElementById("horoscopeImage").src="img/Leo.png";
        return "The lion inside you will reappear today and you won't let anything stay in your path. Be careful of your actions";
    }
    if(sign == "Virgo"){
        document.getElementById("horoscopeImage").src="img/Virgo.png";
        return "Your day will unexpectedly change at the peak of your day. Don't make any commitments you can't commit to.";
    }
    if(sign == "Libra"){
        document.getElementById("horoscopeImage").src="img/Libra.jpg";
        return "You're going to start this week with a brand new mindset and a miracle to go with.";
    }
    if(sign == "Scorpio"){
        document.getElementById("horoscopeImage").src="img/download.jpeg";
        return "Watch out for snakes, your mortal enemy is watching you and waiting for a mistake.";
    }
    if(sign == "Sagittarius"){
        document.getElementById("horoscopeImage").src="img/Sagittarius.png";
        return "Your day is going to be super productive with an emphasis on giving to others and putting yourself second.";
    }
}

function determineYear(year){
    if(year == 2008 || year == 1996 || year == 1984 || year == 1972 || year == 1960){
        return "Rat";
    }
    if(year == 2009 || year == 1997 || year == 1985 || year == 1973 || year == 1961){
        return "Ox";
    }
    if(year == 2010 || year == 1998 || year == 1986 || year == 1974 || year == 1962 || year == 1950){
        return "Tiger";
    }
    if(year == 2011 || year == 1999 || year == 1987 || year == 1975 || year == 1963 || year == 1951){
        return "Rabbit";
    }
    if(year == 2012 || year == 2000 || year == 1988 || year == 1976 || year == 1964 || year == 1952){
        return "Dragon";
    }
    if(year == 2013 || year == 2001 || year == 1989 || year == 1977 || year == 1965 || year == 1953){
        return "Snake";
    }
    if(year == 2014 || year == 2002 || year == 1990 || year == 1978 || year == 1966 || year == 1954){
        return "Horse";
    }
    if(year == 2015 || year == 2003 || year == 1991 || year == 1979 || year == 1967 || year == 1955){
        return "Goat";
    }
    if(year == 2016 || year == 2004 || year == 1992 || year == 1980 || year == 1968 || year == 1956){
        return "Monkey";
    }
    if(year == 2017 || year == 2005 || year == 1993 || year == 1981 || year == 1969 || year == 1957){
        return "Rooster";
    }
    if(year == 2006 || year == 1994 || year == 1982 || year == 1970 || year == 1958){
        return "Dog";
    }
    if(year == 2007 || year == 1995 || year == 1983 || year == 1971 || year == 1959){
        return "Pig";
    }
}
