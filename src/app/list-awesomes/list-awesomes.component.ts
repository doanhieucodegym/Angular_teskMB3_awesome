import { Component, OnInit } from '@angular/core';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-list-awesomes',
  templateUrl: './list-awesomes.component.html',
  styleUrls: ['./list-awesomes.component.scss']
})
export class ListAwesomesComponent implements OnInit {
  awesomelist: Awesome[];
  constructor(private awesomeService: AwesomeService) { }

  ngOnInit() {
    this.awesomeService.getAwesomeList().subscribe(result => {
      this.awesomelist = result;
    });
  }
  onDeleteCourse(id: number ) {
    this.awesomeService.deleteAwesome(id).subscribe((data: Awesome) => {
      this.updateDataAfterDelete(id);
    });
  }
  updateDataAfterDelete(id: number) {
    for (let i = 0; i < this.awesomelist.length; i++) {
      if (this.awesomelist[i].id === id ) {
        this.awesomelist.splice(i, 1);
        break;
      }
    }
  }

}
