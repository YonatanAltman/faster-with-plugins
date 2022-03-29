import { Test, TestingModule } from '@nestjs/testing';
import { ApiCityService } from './api-city.service';

describe('ApiCityService', () => {
  let service: ApiCityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCityService],
    }).compile();

    service = module.get<ApiCityService>(ApiCityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
