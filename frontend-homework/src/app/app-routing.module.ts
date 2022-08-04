import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: ':size', component: ResultComponent },
  { path: '**', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
