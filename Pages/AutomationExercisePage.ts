import { Page, Locator } from '@playwright/test';

export class RegisterPage{
    readonly page : Page;
    readonly Myaccount : Locator;
    readonly Register : Locator;
    readonly FirstName : Locator;
    readonly LastName : Locator;
    readonly Email : Locator;
    readonly Telephone : Locator;
    readonly Password : Locator;
    readonly Cpassword : Locator;
    readonly agree : Locator;
    readonly continue : Locator;
    readonly SuccessMsg : Locator;

    constructor(page : Page) {
        this.page = page;
        this.Myaccount = page.locator('//a[@title="My Account"]');
        this.Register = page.getByRole('link', {name : 'Register'});
        this.FirstName = page.getByPlaceholder("First Name");
        this.LastName = page.locator("#input-lastname");
        this.Email = page.locator("#input-email");
        this.Telephone = page.getByPlaceholder("Telephone");
        this.Password = page.locator("#input-password");
        this.Cpassword = page.locator("#input-confirm");
        this.agree = page.locator('//input[@type="checkbox"]');
        this.continue = page.locator('//input[@value="Continue"]');
        this.SuccessMsg = page.locator('//h1[text() = "Your Account Has Been Created!"]');
    }

    async navigate(){
        await this.page.goto("https://tutorialsninja.com/demo/");
    }

    async RegisterPage(){
        await this.Myaccount.click();
        await this.Register.click();
    }

    async LoginData(fname : string , lname : string, email : string, telephone : string, password : string, cpass : string){
        this.FirstName.fill(fname);
        this.LastName.fill(lname);
        this.Email.fill(email);
        this.Telephone.fill(telephone);
        this.Password.fill(password);
        this.Cpassword.fill(cpass);
    }
    async Continue(){
        this.agree.check();
        this.continue.click();
    }

}