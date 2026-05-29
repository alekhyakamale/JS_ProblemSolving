function Count(count) {
    console.log(count);
    if(count <10){   
        count=count+1;     
        setTimeout(() => {        
            Count(count);
        }, 1000);
    }
}

Count(1);