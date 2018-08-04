function check_leapyear () {
    //define variables
    var year;

    // Get the year from command line: 
    // To execute this code type: node leap_year.js <year>
    // Example: node leap_year.js 1896
    year = process.argv[2];

    //three conditions to find out the leap year
    if( (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) )
    {
        console.log(`${year} is a leap year.`);  
    }
    else
    {
        console.log(`${year} is not a leap year.`);  
    }
}

// Function call
check_leapyear();
