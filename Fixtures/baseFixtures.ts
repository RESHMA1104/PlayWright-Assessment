import { test as base, expect } from '@playwright/test';
import {RegisterPage} from '../Pages/AutomationExercisePage.js';
import{ ProductPage } from '../Pages/SearchPage.js';
import { LoginPage } from '../Pages/LoginPage.js';

type Fixtures = {
    registerPage : RegisterPage;
    productPage : ProductPage;
    loginPage : LoginPage;
}

export const test = base.extend<Fixtures>({
    registerPage : async({page}, use) => {
        await use(new RegisterPage(page));
    },

    productPage : async({page}, use) => {
        await use(new ProductPage(page));
    },

    loginPage : async({page}, use) => {
        await use(new LoginPage(page));
    }
})
export{expect};