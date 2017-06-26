import { shell } from 'electron'

export class SiteCommon {

    constructor() {
    }

    openLink(link: string) {
        shell.openExternal(link)
    }
}