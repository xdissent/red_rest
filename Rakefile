
task :develop do
    sh "git clone git://github.com/edavis10/redmine.git develop"
    db_conf = "
        production:
            adapter: sqlite3
            database: db/production.db
        development:
            adapter: sqlite3
            database: db/development.db
        test:
            adapter: sqlite3
            database: db/test.db"

    File.open("develop/config/database.yml", "w") {|f| f.write(db_conf) }
    
    chdir "develop"
    sh "rake generate_session_store"
    sh "rake db:migrate RAILS_ENV=development"
    sh "rake redmine:load_default_data RAILS_ENV=development REDMINE_LANG=en"
    plugin_path = File.expand_path ".."
    symlink plugin_path, "vendor/plugins/red_rest"
    sh "rake db:migrate_plugins RAILS_ENV=development "
    sh "ruby script/server webrick -e development -d"
end

task :undevelop do
    sh "kill -INT `cat develop/tmp/pids/server.pid`"
    rmtree "develop"
end