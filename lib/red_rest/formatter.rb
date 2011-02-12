require "rbst"

module RedRest
  class Formatter
    def initialize(text)
      @text = text
      executable_path = File.expand_path(File.join(File.dirname(__FILE__), "rst2parts"))
      RbST.executables = {:html => File.join(executable_path, "rst2html.py")}
    end
    
    def to_html(&block)
      RbST.new(@text).to_html
    rescue => e
      return("<pre>problem parsing wiki text: #{e.message}\n"+
             "original text: \n"+
             @text+
             "</pre>")
    end
  end
end