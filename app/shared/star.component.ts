import { Component, OnChanges } from '@angular/forms';

@Component ({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
    rating : number = 4;
    srarWidth: number;

    ngOnChanges(): void {
        this.srarWidth = this.rating * 86/5;
    }
}