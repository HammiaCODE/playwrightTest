import { test, expect} from '@playwright/test';

test.describe("Todos test",() =>{
    test('test page', async({page})=>{
        await page.goto('https://demo.playwright.dev/todomvc/#/');

        //getByRole
        await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();

        await page.getByRole('textbox', { name: 'What needs to be done?' }).click();

        //getByText
        await page.getByText('Double-click to edit a todo');

        await page.getByText('Created by Remo H. Jansen');

        await page.getByText('Part of TodoMVC')

        //getByLabel
        //getByPlaceholder
        //getByAltText
        //getByTitle
        //getByTestId



    })
})