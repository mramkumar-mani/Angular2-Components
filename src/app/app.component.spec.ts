import {
    RouterTestingModule
} from '@angular/router/testing';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';


@Component({
    selector: 'dl-test-flight',
    template: '<div class="title">Hello test</div>'
})
class TestRouterComponent {
}

let config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                AppComponent
            ],
            imports: [ RouterTestingModule, RouterModule ],
            providers: [ provideRoutes(config) ]
        });
    });

    // it('should have title Hello world', async(() => {
    //     TestBed.compileComponents().then(() => {
    //         let fixture: ComponentFixture<AppComponent>;
    //         fixture = TestBed.createComponent(AppComponent);
    //         fixture.detectChanges();

    //         let compiled = fixture.debugElement.nativeElement;
    //         expect(compiled).toBeDefined();
    //     });
    // }));
});
