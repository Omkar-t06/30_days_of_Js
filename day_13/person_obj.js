let person = {
    pName : "XYZ",
    pAge: 18,
    pAddress : "Hyd",
    getDetails() {
        console.log(`Hi. This is ${this.pName} of age ${this.pAge} and lives in ${this.pAddress}`);
    } 
}

module.exports = person;