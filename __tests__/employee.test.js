const Employee = require("../lib/employee");

describe('Employee', () => {
    const worker = new Employee('Name', 1, 'test@testing.com');
        it ('should create an object', () =>
            expect(typeof(worker)).toEqual('object'));

        it('should assign a name property', () => 
            expect(worker.name).toEqual('Name'));

        it('should assign an id property', () => 
            expect(worker.id).toEqual(1));

        it('should assign an email property', () => 
            expect(worker.email).toEqual('test@testing.com'));

        it('should have a method to getName', () => 
            expect(worker.getName()).toEqual('Name'));

        it('should have a method to getId', () => 
            expect(worker.getId()).toEqual(1));

        it('should have a method to getEmail', () => 
            expect(worker.getEmail()).toEqual('test@testing.com'));

        it('should have a method to getRole', () => 
            expect(worker.getRole()).toEqual('Employee'));
});