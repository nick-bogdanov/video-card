import { SiteCommon } from './../site/site.class'
import { Component, Input, Output, EventEmitter, NgZone } from '@angular/core'
import { ipcRenderer } from 'electron'
import * as _ from 'lodash'

@Component({
    selector: 'e-bay',
    templateUrl: './eBay.partial.html'
})

export class EBayComponent extends SiteCommon {
    @Output() componentData = new EventEmitter<any>()
    @Input('loadedData') loadedData: any[]
    public renderedData: any[] = []

    constructor(private ngZone: NgZone) {
        super()
    }

    onUpdateData(data, args) {
        console.log('data');
        this.ngZone.run(() => {
            this.renderedData = _.flatten(args)
            this.updateSiteSetting(true)
        })
    }

    onSingleDataUpdated(event, args) {
        console.log('chunk');
        this.ngZone.run(() => {
            this.renderedData.push(args)
            this.renderedData = _.flatten(this.renderedData)
            this.updateSiteSetting(false)
        })
    }

    ngOnInit() {

        if (!this.loadedData) {
            this.$releaseTheBeast()
        } else {
            this.renderedData = this.loadedData
        }

    }

    $releaseTheBeast() {
        ipcRenderer.send('start-parse', {})

        ipcRenderer.on('results', this.onUpdateData.bind(this))
        ipcRenderer.on('single-product', this.onSingleDataUpdated.bind(this))
    }

    ngOnDestroy() {
        console.log('destroy')
    }

    updateSiteSetting(parsed: boolean) {
        this.componentData.emit({
            site: 'ebay',
            data: this.renderedData,
            parsed
        })
    }
}