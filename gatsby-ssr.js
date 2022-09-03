const React = require('react');
const { MainTemplate } = require('./src/templates/MainTemplate/MainTemplate');

exports.wrapPageElement = ({ element, props }) => (
  <MainTemplate {...props}>{element}</MainTemplate>
);
