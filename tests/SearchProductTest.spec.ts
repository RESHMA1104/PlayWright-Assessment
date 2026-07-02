import {expect, test} from '../Fixtures/baseFixtures';
import { ProductPage } from '../Pages/SearchPage';
import loginData from '../Test-Data/loginData.json' with {type : 'json'}

test.describe("RegisterValidDetails", () => {
    test.beforeEach(async({registerPage, loginPage, productPage})=>{
        registerPage.navigate();
        loginPage.LoginDetails(
            loginData.LoginDataa.email,
            loginData.LoginDataa.password
        );

        test("Search a Product", async({productPage}) => {
            productPage.Searchbox.fill("MacBook")
            productPage.search.click();
        })
        await expect(productPage.result).toContainText("Mac");
    });

})