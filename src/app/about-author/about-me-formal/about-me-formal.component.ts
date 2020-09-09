import {Component, OnDestroy, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';

@Component({
    selector: 'app-about-me-formal',
    templateUrl: './about-me-formal.component.html',
    styleUrls: ['./about-me-formal.component.scss']
})
export class AboutMeFormalComponent implements OnInit, OnDestroy {
    currentLang = this.translate.currentLang;

    constructor(private translate: TranslateService) {
        this.translate.onLangChange.pipe(untilComponentDestroyed(this))
            .subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
