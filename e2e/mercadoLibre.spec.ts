import { test, expect} from '@playwright/test';

test.describe('Mercado Libre', () =>{
    test('use the 7 locators', async({page})=>{
        await page.goto('https://www.mercadolibre.com.mx/');

        //page.getByRole()
        await page.getByRole('link', { name: 'Mercado Libre México - Donde' });

        //page.getByTestId()
        await page.getByTestId('text:main-text');

        //page.getByAltText()

        //page.getByText()
        await page.getByText('Puedes pagar con tarjeta, dé');
        await page.getByText('Aprovecha este beneficio en');
        await page.getByText('¿No te gusta? ¡Devuélvelo! En')


        //page.getByLabel()


        //page.getByPlaceholder()


        //page.getByTitle()


    })
})