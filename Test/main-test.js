/**
 * Created by jiaoqiqi on 16-5-11.
 */
describe('LCD',function () {
    var LCDNumberIcons;
    var input;

    beforeEach(function () {
        LCDNumberIcons =buildLCDNumberIcons();
        input = 12345;
    });
    describe('unit test',function () {
        describe('splitNumbers',function () {

            it('make correct splited numbers',function () {
                var numberArray = [1,2,3,4,5];
                expect(splitNumbers(input)).toEqual(numberArray);
            });
        });
        describe('bulidLCDGrid',function () {
            var LCDLines;
            beforeEach(function () {
                LCDLines = [
                    '... ._. ._. ... ._. ', 
                    '..| ._| ._| |_| |_. ', 
                    '..| |_. ._| ..| ._| '];
            });
            it('make correct LCDGrid', function () {
                var LCDGrid =
                    '... ._. ._. ... ._. \n' +
                    '..| ._| ._| |_| |_. \n' +
                    '..| |_. ._| ..| ._| \n';
                expect(bulidLCDGrid(LCDLines)).toEqual(LCDGrid);
            });
        });
    });

    describe('integration testing',function () {

        it('make correct numberIcons',function () {

            spyOn(console, 'log');
            LCD(input);
            var printLCD =
                '... ._. ._. ... ._. \n' +
                '..| ._| ._| |_| |_. \n' +
                '..| |_. ._| ..| ._| \n';
            expect(console.log).toHaveBeenCalledWith(printLCD);
        });
    });
});
