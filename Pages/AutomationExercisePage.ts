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
        this.Myaccount = page.locator("//a[@title='My Account']");
        this.Register = page.locator("//a[text()='Register']");
        this.FirstName = page.locator("//input[@id='input-firstname']");
        this.LastName = page.locator("//input[@name='lastname']");
        this.Email = page.locator("//input[@name='email']");
        this.Telephone = page.locator("//input[@name='telephone']");
        this.Password = page.locator("//input[@name='password']");
        this.Cpassword = page.locator("//input[@name='confirm']");
        this.agree = page.locator("//input[@type='checkbox']");
        this.continue = page.locator("//input[@value='Continue']");
        this.SuccessMsg = page.locator("//h1[text() = 'Your Account Has Been Created!']");
    }

    async navigate(){
        await this.page.goto("https://tutorialsninja.com/demo/",{
            waitUntil : 'domcontentloaded',
        });
    }

    async RegisterPage(){
        await this.Myaccount.click();
        await this.Register.click();
    }

    async LoginData(fname : string , lname : string, email : string, telephone : string, password : string, cpassword : string){
        await this.FirstName.fill(fname);
        await this.LastName.fill(lname);
        await this.Email.fill(email);
        await this.Telephone.fill(telephone);
        await this.Password.fill(password);
        await this.Cpassword.fill(cpassword);
    }
    async Continue(){
        await this.agree.check();
        await this.continue.click();
    }

}