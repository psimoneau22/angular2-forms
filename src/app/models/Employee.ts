export class Employee {
    constructor(
        public firstName: string,
        public lastName: string,
        public isFullTime: string = 'No',
        public paymentType: string = "W2",        
        public language: string = "default",
        public dateHired: number = Date.now(),
        public timeEntered: number = Date.now()
    ) {

    }
}