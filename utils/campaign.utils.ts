import { Page } from "@playwright/test";
import { GeneralUtils } from "./general.utils";

export class CampaignUtils {
    page : Page;

    constructor(page : Page) {
        this.page = page;
    }

    public async createCampaign() {
        console.log('Create Campaing Started...')

        await this.page.getByRole('button', { name: ' Marketing' }).click();

        await GeneralUtils.sleep(1000);

        const isPaxExists = await this.page.getByRole('cell', { name: ' Airline reputation' }).isVisible();
        const isEcoFriendExists = await this.page.getByRole('cell', { name: ' Eco friendly' }).isVisible();
        
        if(!isEcoFriendExists) {
            await this.page.getByRole('button', { name: ' New campaign' }).click();
            await this.page.getByRole('cell', { name: 'Eco-friendly Increases' }).click();
            await this.page.getByRole('button', { name: '$' }).click();

        await GeneralUtils.sleep(1000);

        if(!isPaxExists) {
            await this.page.getByRole('button', { name: ' New campaign' }).click();
            await this.page.getByRole('cell', { name: 'Increase airline reputation' }).click();
            await this.page.select_option('#dSelector', '6')
            await this.page.locator('#c4Btn').click()

            console.log("Eco Friendly Campaign Created Successfully!");
        }

        console.log('Campaign Created Finished!');
    }
}
