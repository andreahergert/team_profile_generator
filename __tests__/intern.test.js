const Intern = require("../lib/intern");

describe('Intern', () => {
    const engr = new Intern('Name', 1, 'test@testing.com', 'school');
        it ('should create an object', () =>
            expect(typeof(engr)).toEqual('object'));

        it('should assign a name property', () => 
            expect(engr.name).toEqual('Name'));

        it('should assign an id property', () => 
            expect(engr.id).toEqual(1));

        it('should assign an email property', () => 
            expect(engr.email).toEqual('test@testing.com'));

        it('should have a method to getName', () => 
            expect(engr.getName()).toEqual('Name'));

        it('should have a method to getId', () => 
            expect(engr.getId()).toEqual(1));

        it('should have a method to getEmail', () => 
            expect(engr.getEmail()).toEqual('test@testing.com'));

        it('should have a method to getRole', () => 
            expect(engr.getRole()).toEqual('Intern'));

        it('should have a method to getSchool', () => 
            expect(engr.getSchool()).toEqual('school'));
});