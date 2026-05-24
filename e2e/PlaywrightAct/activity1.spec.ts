import { test, expect} from '@playwright/test';

test.describe('Mercado Libre', () =>{
    test('use the 7 locators', async({page})=>{
        await page.goto('https://www.mercadolibre.com.mx/');

        //page.getByRole()
        await page.getByRole('combobox', { name: 'Ingresa lo que quieras' });
        await page.getByRole('list').filter({ hasText: 'CategoríasVehí' });

        //page.getByTestId()
        await page.getByTestId('action:understood-button');
        await page.getByTestId('action:customize-button');

        //page.getByAltText()
        // Looked for the website in inspect to get this information, as it is, it isn't shown in the playwright UI, doesn't work probably because it comes from a carroussel of images
        // await page.getByAltText('HOT SALE, HASTA 60% OFF'); 

        //page.getByText()
        await page.getByText('CategoríasVehí').click(); //Trying to do a click shows an error in console of "Permission denied" :(

        //page.getByLabel()
        await page.getByLabel('Ingresa lo que quieras encontrar').fill('sueter'); 

        //page.getByPlaceholder()
        await page.getByPlaceholder('Buscar productos, marcas y más…').hover();

        //page.getByTitle()
        //Not found

    })
})