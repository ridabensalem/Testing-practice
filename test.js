//test number 1
const length=require('./script');
const reverse=require('./script');

test('string length should be equal to',()=>{
    expect(length('Rida')).toBe(4);
    expect(length('Rida')).toBeGreaterThan(0);
    expect(length('Rida')).toBeLessThan(10);
});
//task 2 
test('thew reverse string should be',()=>{
    expect(reverse('salt')).toBe('tlas');
})