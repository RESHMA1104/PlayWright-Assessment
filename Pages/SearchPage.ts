import { Page, Locator, expect } from '@playwright/test';

export class ProductPage{
    readonly page : Page;
    readonly Searchbox : Locator;
    readonly search : Locator;
    readonly result : Locator;

    constructor(page : Page){
        this.page = page;
        this.Searchbox = page.getByPlaceholder('Search');
        this.search = page.locator('//button[@class="btn btn-default btn-lg"]');
        this.result = page.locator("//a[text()='MacBook']");
    }
}