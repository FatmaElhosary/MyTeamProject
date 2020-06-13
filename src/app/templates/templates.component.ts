import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var btns = document.getElementsByClassName('template-a');

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        $('a.activee').removeClass('activee');
        $(this).addClass('activee');
      });
    }

    $('.template-a').click(function () {
      $(this).addClass('activee');
      var value = $(this).attr('data-class');
      if (value == 'all') {
        $('.all').fadeIn(1000);
      } else if (value == 'portofolio') {
        $('.all').not($('.portofolio')).fadeOut();
        $('.portofolio').fadeIn(1000);
      } else if (value == 'photography') {
        $('.all').not($('.photography')).fadeOut();
        $('.photography').fadeIn(1000);
      } else if (value == 'blog') {
        $('.all').not($('.blog')).fadeOut();
        $('.blog').fadeIn(1000);
      }
    });
  }
}
