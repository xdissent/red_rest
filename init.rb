require 'redmine'
require 'red_rest'

Redmine::Plugin.register :red_rest do
  name 'Red reSt'
  author 'Greg Thornton'
  description 'A reStructuredText wiki formatter for Redmine'
  version '0.0.1'

  wiki_format_provider 'reStructuredText', RedRest::Formatter, RedRest::Helper
end