const React = require('react');
const { MainTemplate } = require('./src/templates/MainTemplate');

exports.wrapPageElement = ({ element, props }) => (
  <MainTemplate {...props}>{element}</MainTemplate>
);
