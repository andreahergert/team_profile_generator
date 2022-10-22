const Engineer = require("../lib/engineer");

describe('Engineer', () => {
    const engr = new Engineer('Name', 1, 'test@testing.com', 'github');
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
            expect(engr.getRole()).toEqual('Engineer'));

        it('should have a method to getGithub', () => 
            expect(engr.getGithub()).toEqual('github'));
});