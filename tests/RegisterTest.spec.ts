import {expect, test} from '../Fixtures/baseFixtures';
import { RegisterPage } from '../Pages/AutomationExercisePage';
import loginData from '../Test-Data/loginData.json' with {type : 'json'}

test.describe("RegisterValidDetails", () => {
    test.beforeEach(async({registerPage})=>{
        registerPage.navigate();
    });
    
    test("Register Details", async({registerPage}) => {
        registerPage.LoginData(
            loginData.LoginDetails.fname,
            loginData.LoginDetails.lname,
            loginData.LoginDetails.email,
            loginData.LoginDetails.telephone,
            loginData.LoginDetails.password,
            loginData.LoginDetails.cpassword
        );
        expect(registerPage.SuccessMsg).toContainText("Created!")
    })
})