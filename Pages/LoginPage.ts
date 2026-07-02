import { Page, Locator } from '@playwright/test';

export class LoginPage{
    readonly page : Page;
    readonly Myaccount : Locator;
    readonly Login : Locator;
    readonly Email : Locator;
    readonly Password : Locator;
    readonly LoginLink : Locator;
    readonly account : Locator;

    constructor(page : Page) {
        this.page = page;
        this.Myaccount = page.locator('//a[@title="My Account"]');
        this.Login = page.locator("//a[text() = 'Login']")
        this.Email = page.locator("#input-email");
        this.Password = page.locator("#input-password");
        this.LoginLink = page.locator("//input[@type='submit']");   
        this.account = page.locator("//h2[text()='My Account']")
    }

    async LoginDetails(email : string, password : string) {
        await this.Myaccount.click();
        await this.Login.click();
        await this.Email.fill(email);
        await this.Password.fill(password);
        await this.LoginLink.click();
    }

}