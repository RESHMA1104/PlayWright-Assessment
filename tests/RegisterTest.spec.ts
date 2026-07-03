import {expect, test} from '../Fixtures/baseFixtures';
import { RegisterPage } from '../Pages/AutomationExercisePage';
import loginData from '../Test-Data/loginData.json' with {type : 'json'}

test.describe("RegisterValidDetails", () => {
    test.beforeEach(async({registerPage})=>{
        await registerPage.navigate();
        await registerPage.RegisterPage();
    });
    
    test("Register Details", async({registerPage}) => {
         await registerPage.LoginData(
            loginData.LoginDetails.fname,
            loginData.LoginDetails.lname,
            loginData.LoginDetails.email,
            loginData.LoginDetails.telephone,
            loginData.LoginDetails.password,
            loginData.LoginDetails.cpassword
        );
        await registerPage.Continue();
        await expect(registerPage.SuccessMsg).toHaveText("Your Account Has Been Created!");
    })
})