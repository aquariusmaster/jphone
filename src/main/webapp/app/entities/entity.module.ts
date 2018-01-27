import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JphoneClientModule } from './client/client.module';
import { JphoneManagerModule } from './manager/manager.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JphoneClientModule,
        JphoneManagerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JphoneEntityModule {}
