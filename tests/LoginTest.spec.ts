import {expect, test} from '../Fixtures/baseFixtures';
import loginData from '../Test-Data/loginData.json' with {type : 'json'}

test.describe("LoginCredentials", () => {
    test.beforeEach(async({registerPage})=>{
        await registerPage.navigate();
    });

    test("Valid Login @smoke", async({loginPage}) => {
        await loginPage.LoginDetails(
            loginData.LoginDataa.email,
            loginData.LoginDataa.password
        );
        expect(loginPage.account).toHaveText("My Account");
    });

    test("Invalid Login @Regression", async({loginPage}) => {
        await loginPage.LoginDetails(
            loginData.InvalidDataa.email,
            loginData.InvalidDataa.password
        );
        expect(loginData.InvalidDataa.errormsg).toBe("Warning: No match for E-Mail Address and/or Password.");
    })
})