import { count } from './../src/haiku.js';
import { isHaiku } from './../src/haiku.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('#haiku').submit(function(event) {
    event.preventDefault();


    let first = count($('#first').val());
    let second = count($('#second').val());
    let third = count($('#third').val());

    $('#result').text(isHaiku(first, second, third));

  });
});
