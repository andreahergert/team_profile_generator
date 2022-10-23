const Intern = require("../lib/intern");

describe('Intern', () => {
    const int = new Intern('Name', 1, 'test@testing.com', 'school');
        it ('should create an object', () =>
            expect(typeof(int)).toEqual('object'));

        it('should assign a name property', () => 
            expect(int.name).toEqual('Name'));

        it('should assign an id property', () => 
            expect(int.id).toEqual(1));

        it('should assign an email property', () => 
            expect(int.email).toEqual('test@testing.com'));

        it('should have a method to getName', () => 
            expect(int.getName()).toEqual('Name'));

        it('should have a method to getId', () => 
            expect(int.getId()).toEqual(1));

        it('should have a method to getEmail', () => 
            expect(int.getEmail()).toEqual('test@testing.com'));

        it('should have a method to getRole', () => 
            expect(int.getRole()).toEqual('Intern'));

        it('should have a method to getSchool', () => 
            expect(int.getSchool()).toEqual('school'));
});