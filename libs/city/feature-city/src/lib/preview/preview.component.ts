import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {CityService} from "../city.service";

@Component({
  selector: 'city-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent implements OnInit {
  city: any;

  constructor(private activatedRoute: ActivatedRoute,
              private cityService: CityService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => this.cityService
          .get('' + params.get('cid')))
      )
      .subscribe(city => {
        this.city = city;
        this.changeDetectorRef.markForCheck();
      });
  }

}
