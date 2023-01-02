import DonutMaker from './donut-maker.js';

describe("donutClicked", () => {
    test("should add a donut when clicked", () => {
        const underTest = new DonutMaker();
        underTest.donutClicked();
        expect(underTest.donutClick).toEqual(1);
    });

    test("should return amount of donuts", () => {
        const underTest = new DonutMaker();
        underTest.donutClicked();
        expect(underTest.getDonutCount()).toEqual(1);
    });

    test("afford an auto clicker", () => {
        const underTest = new DonutMaker();
        underTest.donutClick = 100
        underTest.addAutoClicker();
        expect(underTest.donutCount).toEqual(1)
    });

    test("subtract from donut count", () => {
        const underTest = new DonutMaker(1);
        underTest.donutClick = 100;
        underTest.addAutoClicker();
        expect(underTest.donutClick).toEqual(0)
    });

    test("increase the auto clicker cost by 10%", () => {
        const underTest = new DonutMaker();
        underTest.donutClick = 100;
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(110)
    });

    test("keep increasing auto clicker cost by 10%", () => {
        const underTest = new DonutMaker();
        underTest.donutClick = 100;
        underTest.increaseAutoClickerCost();
        expect(underTest.autoClickerCost).toEqual(110);
    });

    test("Ensure that there are enough clicks to buy a Auto Clicker", () => {
        const underTest = new DonutMaker();
        underTest.donutCount = 90;
        underTest.addAutoClicker()
        expect(underTest.getAutoClickerCount()).toEqual(0)
    });

    test("return companion you bought", () => {
        const underTest = new DonutMaker();
        underTest.donutClick = 100;
        underTest.addAutoClicker();
        expect(underTest.getAutoClickerCount()).toEqual(1)
    });

    test("purchase a donut multiplier", () => {
        const underTest = new DonutMaker();
        underTest.donutClick = 10;
        underTest.addMultiplier();
        expect(underTest.donutClick).toEqual(0);
    });

    test("donut multiplier cost increases by 10%", () => {
        const underTest = new DonutMaker();
        underTest.donutClick = 10;
        underTest.addMultiplier();
        expect(underTest.multiplierCost).toEqual(11);
    });

    test("cannot buy multiplier without 10 clicks", () => {
        const underTest = new DonutMaker();
        underTest.donutClick = 9;
        underTest.addMultiplier();
        expect(underTest.multiplierCount).toEqual(0);
    });

    test("increase the click value by .2", () => {
        const underTest = new DonutMaker();
        underTest.increaseDonutCountPercentage();
        expect(underTest.donutCount).toEqual(1.2);
    });

    test("should add 20% after multiplier is added", () => {
        const underTest = new DonutMaker();
        underTest.donutClick = 10;
        underTest.addMultiplier();
        underTest.donutClicked();
        expect(underTest.donutClick).toEqual(1.2);
    });
});
