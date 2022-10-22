const Manager = require("../lib/manager");

describe('Manager', () => {
    const mgr = new Manager('Name', 1, 'test@testing.com', 2);
        it ('should create an object', () =>
            expect(typeof(mgr)).toEqual('object'));

        it('should assign a name property', () => 
            expect(mgr.name).toEqual('Name'));

        it('should assign an id property', () => 
            expect(mgr.id).toEqual(1));

        it('should assign an email property', () => 
            expect(mgr.email).toEqual('test@testing.com'));

        it('should have a method to getName', () => 
            expect(mgr.getName()).toEqual('Name'));

        it('should have a method to getId', () => 
            expect(mgr.getId()).toEqual(1));

        it('should have a method to getEmail', () => 
            expect(mgr.getEmail()).toEqual('test@testing.com'));

        it('should have a method to getRole', () => 
            expect(mgr.getRole()).toEqual('Manager'));

        it('should have a method to getOfficeNumber', () => 
            expect(mgr.getOfficeNumber()).toEqual(2));
});
