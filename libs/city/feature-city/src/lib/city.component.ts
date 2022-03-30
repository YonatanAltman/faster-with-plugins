import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {CityService} from "./city.service";
import {ReplaySubject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'city-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityComponent implements OnInit {
  title = 'Cities List';
  cities$ = new ReplaySubject<any[]>(1);
  table = {
    cid: '#',
    name: 'name',
    projects: 'projects',
    actions: '',
  }

  constructor(private cityService: CityService,
              private changeDetectorRef: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  public getAll() {
    this.cityService.get().subscribe(cities => {
      this.cities$.next(cities);
    });
  }

  public navigate(city: any) {
    return this.router.navigate(['./city/' + city.cid]);
  }
}
