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
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const fred2 = new Instructor({
    name: 'Fred 2',
    location: 'Bedrock 2',
    age: 38,
    gender: 'F',
    favLanguage: 'JavaScript 2',
    specialty: 'Front-end 2',
    catchPhrase: `Don't forget the homies 2`
});

const rupert = new Student({
    name: 'Rupert',
    location: 'Everywhere',
    gender: 'M',
    previousBackground: 'Kiky',
    className: 'Rupert 101',
    favSubjects: ['Treats', 'Smacking']
});

const rupert2 = new Student({
    name: 'Rupert2',
    location: 'Everywhere2',
    gender: 'F',
    previousBackground: 'Kiky2',
    className: 'Rupert 102',
    favSubjects: ['Treats2', 'Smacking2']
});

const rene = new ProjectManager({
    name: 'Rene',
    location: 'Irvine',
    age: 37,
    gender: 'M',
    favLanguage: 'C++',
    specialty: 'Architecture',
    catchPhrase: 'Are you done yet',
    gradClassName: 'CS2K19',
    favInstructor: 'Cam'
});

const rene2 = new ProjectManager({
    name: 'Rene2',
    location: 'Costa Mesa',
    age: 38,
    gender: 'F',
    favLanguage: 'C#',
    specialty: 'Architecture 2',
    catchPhrase: 'Are you done yet 2',
    gradClassName: 'CS2K20',
    favInstructor: 'Cam2'
});

console.log(`========= lambda-Classes =========`);
console.log(`Instructor:`)
console.log(fred.speak());
console.log(fred.demo('Obects'));
console.log(fred2.speak());
console.log(fred2.demo('Obects 2'));
console.log(`Student:`);
console.log(rupert.speak());
console.log(rupert.listSubjects());
console.log(rupert.PRAssignment(`Black cat white cat`));
console.log(rupert.sprintChallenge('crying'));
console.log(rupert2.speak());
console.log(rupert2.listSubjects());
console.log(rupert2.PRAssignment(`Black cat white cat 2`));
console.log(rupert2.sprintChallenge('crying 2'));
console.log(`ProjectManager:`);
console.log(rene.speak())
console.log(rene.standUp('class'));
console.log(rene.debugsCode(rupert, 'Crying for treats'));
console.log(rene.gradClassName);
console.log(rene.favInstructor);
console.log(rene2.speak());
console.log(rene2.standUp('class2'));
console.log(rene2.debugsCode(rupert2, 'Crying for MORE treats'));
console.log(rene2.gradClassName);
console.log(rene.favInstructor);

