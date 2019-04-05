// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name} I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
       console.log(`Today we are learning about ${subject}`);
    }
    grade(studentObj, subject) {
        console.log(`${studentObj.name} recieves a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listSubjects() {
        this.favSubjects.forEach((element) => {
            console.log(element)
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to @${channel} standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'fred',
    location: 'bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'javascript',
    specialty: 'front-end',
    catchPhrase: `don't forget the homies`
});

const derf = new Instructor({
    name: 'derf',
    location: 'kcordeb',
    age: 73,
    gender: 'F',
    favLanguage: 'tpircsavaj',
    specialty: 'end-front',
    catchPhrase: `homies the forget dont`
});

const rupert = new Student({
    name: 'rupert',
    location: 'home',
    gender: 'M',
    previousBackground: 'kiky',
    className: 'Rupert 101',
    favSubjects: ['treats', 'smacking']
});

const trepur = new Student({
    name: 'trepur',
    location: 'emoh',
    gender: 'F',
    previousBackground: 'ykik',
    className: 'trepur 101',
    favSubjects: ['staert', 'gnikcams']
});

const rene = new ProjectManager({
    name: 'rene',
    location: 'irvine',
    age: 37,
    gender: 'M',
    favLanguage: 'c++',
    specialty: 'web',
    catchPhrase: 'are you done yet',
    gradClassName: 'cs2',
    favInstructor: 'cam'
});

const ener = new ProjectManager({
    name: 'ener',
    location: 'enivri',
    age: 73,
    gender: 'F',
    favLanguage: '++c',
    specialty: 'bew',
    catchPhrase: 'yet done you are',
    gradClassName: '2cs',
    favInstructor: 'mac'
});

console.log(`========= lambda-Classes =========`);
// Instructor
console.log(`Instructor 1:`)
console.log(fred.speak());
console.log(fred.demo('objects'));
console.log(fred.specialty);
console.log(fred.favLanguage);
console.log(fred.catchPhrase);
console.log(`Instructor 2:`);
console.log(derf.speak());
console.log(derf.demo('stcejbo'));
console.log(derf.specialty);
console.log(derf.favLanguage);
console.log(derf.catchPhrase);

//Student
console.log(`Student 1:`);
console.log(rupert.speak());
console.log(rupert.listSubjects());
console.log(rupert.PRAssignment(`black cat white cat`));
console.log(rupert.sprintChallenge('crying'));
console.log(rupert.previousBackground);
console.log(rupert.className);
console.log(rupert.favSubjects);
console.log(`Student 2:`);
console.log(trepur.speak());
console.log(trepur.listSubjects());
console.log(trepur.PRAssignment(`cat white cat black`));
console.log(trepur.sprintChallenge('gniyrc'));
console.log(trepur.previousBackground);
console.log(trepur.className);
console.log(trepur.favSubjects);

//Project Manager
console.log(`ProjectManager:`);
console.log(rene.speak())
console.log(rene.standUp('class'));
console.log(rene.debugsCode(rupert, 'crying for treats'));
console.log(rene.gradClassName);
console.log(rene.favInstructor);
console.log(ener.speak());
console.log(ener.standUp('ssalc'));
console.log(ener.debugsCode(trepur, 'treats for crying'));
console.log(ener.gradClassName);
console.log(ener.favInstructor);