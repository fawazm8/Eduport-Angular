import { Component } from '@angular/core'
import { CountUpModule } from 'ngx-countup'

@Component({
  selector: 'dashboard-counter',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './counter.component.html',
  styles: ``,
})
export class CounterComponent {}