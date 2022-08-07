import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, tap, Observable, map, of } from 'rxjs';
import { Brand, Category } from 'src/app/interfaces/common.interface';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  public model = {
    brand: null,
    category: null,
    size: null,
  };

  public loading = false;

  public brands: Observable<Brand[]>;
  public categories: Observable<Category[]> = of([]);

  constructor(
    private router: Router,
    private calculatorService: CalculatorService
  ) {
    this.brands = this.calculatorService
      .getBrands()
      .pipe(map((res) => res.brands));
  }

  ngOnInit(): void {}

  public getResult(): void {
    this.loading = true;
    this.calculatorService
      .getSizes(this.model)
      .pipe(
        first(),
        tap((size: any) => {
          this.loading = false;
          this.router.navigate([
            size.sizes.length
              ? size.sizes.length == 1
                ? size.sizes[0].label
                : size.sizes[0].label + '-' + size.sizes[1].label
              : 'not-found',
          ]);
        })
      )
      .subscribe();
  }

  public getCategories() {
    this.categories = this.calculatorService
      .getCategories(this.model.brand)
      .pipe(map((res) => res.categories));
  }
}
