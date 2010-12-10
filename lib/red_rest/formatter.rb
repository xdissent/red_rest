require 'red_rest/rbst.rb'

module RedRest
  class Formatter
    def initialize(text)
      @text = text
    end
    
    def to_html(&block)
      RedRest::RbST.new(@text).to_html
    rescue => e
      return("<pre>problem parsing wiki text: #{e.message}\n"+
             "original text: \n"+
             @text+
             "</pre>")
    end
  end
end