import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {City} from "./city";
import {CitiesMock} from "./city.mock";

@Controller('city')
export class CityController {
  constructor() {
  }

  @Post()
  create(@Body() city: City): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): City[] {
    return CitiesMock;
  }

  @Get(':cid')
  findOne(@Param('cid') cid: string): City {
    return CitiesMock.find(c => c.cid === cid);
  }

  @Get(':cid/projects')
  find(@Param('cid') cid: string): string[] {
    return CitiesMock.find(c => c.cid === cid)?.projectsIds;
  }
}
