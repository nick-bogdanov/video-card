import { Component, Output, EventEmitter } from '@angular/core';
import { ISitesLinks } from './sites.links.interface';
import { navigationLinks } from '../../config/navigation.menu'

@Component({
    selector: 'navigation',
    templateUrl: './navigation.partial.html'
})

export class NavigationComponent {
    @Output() currentSite = new EventEmitter<string>();
    public sitesToParse: ISitesLinks[] = navigationLinks;
    public loading: boolean;

    setSite(siteName: ISitesLinks): void {
        this.currentSite.emit(siteName.name);
    }
}
