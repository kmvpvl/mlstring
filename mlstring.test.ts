import '@testing-library/jest-dom';
import MLString from "./mlstring";
it('Multi-language string creation and simple test', () => {
    const strEst = new MLString({
        default: "estimated", 
        values: new Map([
            ["de", "vermutet"],
            ["fr", "censé"],
            ["es", "supuesto"],
            ["uk", "очікуваний"],
            ["ru", "ожидаемый"]])
    });
    console.log(String(strEst));
    expect(strEst.toString()).toEqual("estimated");
    expect(strEst.toString("de")).toEqual("vermutet");
});

it('Multi-language string creation as string', () => {
    const strEst = new MLString("estimated");
    console.log(String(strEst));
    expect(strEst.toString()).toEqual("estimated");
    expect(strEst.toString("de")).toEqual("estimated");
});

it ('Getting language string from browser', ()=>{
    expect(MLString.getLang()).toBeDefined();
});
