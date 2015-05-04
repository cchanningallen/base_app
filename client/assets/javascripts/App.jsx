import $ from 'jquery';
import React from 'react';
import Test from './components/Test';


$(function onLoad() {
  function render() {
    if ($('#content').length > 0) {
      React.render(
        <Test/>,
        document.getElementById('content')
      );
    }
  }

  render();

  // Next part is to make this work with turbo-links
  $(document).on('page:change', () => {
    render();
  });
});
