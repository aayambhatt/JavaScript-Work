const aayam = { 
    firstName: 'Aayam',
    lastName: 'Bhatt',
    birthYear: 2002,
    job: 'Full-Stack Developer',
    frens: ['Aaryan', 'Ruru', 'Tusky'],
    hasDriverLicense: false,

    // calcAge: function(birthYear){
    //     return 2025-birthYear;
    // }
    
    calcAge: function(){
        console.log(this);
        return 2025-this.birthYear;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    }

};

console.log(aayam.calcAge());

// challenege 
// "Aayam is a 22yo Developer, and he has a drivers license"

console.log(aayam.getSummary());

