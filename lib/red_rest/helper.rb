module RedRest
  module Helper
    unloadable
    
    def wikitoolbar_for(field_id)
      url = 'http://docutils.sourceforge.net/docs/user/rst/quickref.html#contents'
      help_link = l(:setting_text_formatting) + ': ' +
        link_to(l(:label_help), url,
                :onclick => "window.open(\\'#{ url }\\', \\'\\', \\'resizable=yes,location=no,width=700,height=740,menubar=no,status=no,scrollbars=yes\\'); return false;")
      
      content_for :header_tags do
        stylesheet_link_tag('jstoolbar') +
          stylesheet_link_tag('edit', :plugin => 'red_rest') +
          javascript_include_tag('jstoolbar/jstoolbar') +
          javascript_include_tag('toolbar', :plugin => 'red_rest') +
          javascript_include_tag("jstoolbar/lang/jstoolbar-#{current_language.to_s.downcase}")
      end
      
      javascript_tag("var wikiToolbar = new jsToolBar($('#{field_id}')); wikiToolbar.setHelpLink('#{help_link}'); wikiToolbar.draw();")
    end
    
    def initial_page_content(page)
      "#{page.pretty_title}\n#{'='*page.pretty_title.length}\n"
    end
    
    def heads_for_wiki_formatter
      stylesheet_link_tag('pygments', :plugin => 'red_rest')
    end
  end
end