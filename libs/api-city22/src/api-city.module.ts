import {Module} from '@nestjs/common';
import {ApiCityService} from './api-city.service';
import {CityController} from "./controller/city/city.controller";

@Module({
  controllers: [CityController],
  providers: [ApiCityService],
  exports: [ApiCityService],
})
export class ApiCityModule {
}
