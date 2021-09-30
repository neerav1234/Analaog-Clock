setInterval(() => {
    d = new Date();
    
    h = d.getHours();

    m = d.getMinutes();

    s = d.getSeconds();


    h1 = 30*h + m/2;
    console.log(h1);

    m1 = 6*m;
    console.log(m1);

    s1 = 6*s;
    console.log(s1);

    hour.style.transform = `rotate(${h1}deg)`;
    minute.style.transform = `rotate(${m1}deg)`;
    second.style.transform = `rotate(${s1}deg)`;
    
}, 1000);