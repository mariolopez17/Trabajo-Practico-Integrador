import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { OrderModule } from './app/features/order/order.module';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    OrderModule,
    HttpClientModule,
  ],
});
