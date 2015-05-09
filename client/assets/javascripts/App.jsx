import $ from 'jquery';
import React from 'react';
import AppRoot from 'components/AppRoot';

$(function onLoad() {
  function render() {
    if ($('#content').length > 0) {
      React.render(
        <AppRoot />,
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
