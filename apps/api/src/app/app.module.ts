import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ApiCityModule} from "@faster-with-plugins/api-city";

@Module({
  imports: [ApiCityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
