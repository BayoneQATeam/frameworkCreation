import { Page } from "@playwright/test"

export class CommonLib {
    protected _page: Page

    constructor(page: Page) {
        this._page = page
    }

    async explicitWait(time: number): Promise<void> {
        await this._page.waitForTimeout(time)
    }

    async waitForElementToBeVisible(locator: string): Promise<void> {
        await Promise.all([
            this._page.waitForSelector(locator, {state: 'visible', timeout: 40000}),
            this._page.isVisible(locator)
        ])
    }
}