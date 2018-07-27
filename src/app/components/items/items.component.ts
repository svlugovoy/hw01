import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'svl-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  products: any[] = [
    {
      name: 'Salmon - Canned',
      price: '$91.56',
      info: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      review: [
        {
          name: 'Denis',
          text: 'Some review text'
        }
      ]
    },
    {
      name: 'Soup - Beef, Base Mix',
      price: '$126.14',
      info: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      review: [
        {
          name: 'Ivan',
          text: 'Some review text'
        },
        {
          name: 'Maks',
          text: 'Some review text'
        }
      ]
    },
    {
      name: 'Test - Test',
      price: '$10.59',
      info: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      review: []
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  removeProduct(idx) {
    this.products.splice(idx, 1);
  }

  manipulateReviews(e) {
    const reviewDivClassList = e.target.parentElement.querySelector('.reviews').classList;

    if (reviewDivClassList.contains('hidden')) {
      reviewDivClassList.remove('hidden');
    } else {
      reviewDivClassList.add('hidden');
    }

  }

  hideReviews(e) {
    e.target.parentElement.classList.add('hidden');
  }


}
