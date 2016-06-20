# config valid only for version of Capistrano
lock '3.5.0'

# Load up the mBoy gem
Mboy.new() # Setting initial defaults.

set :application, 'iwasasuperhero' # no spaces or special characters
set :project_name, 'iwasasuperhero.com' # pretty name that can have spaces
set :repo_url, 'https://github.com/fleeting/iwasasuperhero.com.git' # the git repo url
set :current_dir, 'public_html' # almost always public_html

# Default value for :linked_files is []
set :linked_files, %w{config.js} # Note that this file must exist on the server already, Capistrano will not create it.

# Default value for linked_dirs is []
set :linked_dirs, %w{node_modules content/data content/images}

namespace :deploy do
  STDOUT.sync

  desc 'Build'
  after :updated, :deploybuild do
    on roles(:web) do
      within release_path  do
        invoke 'build:npm'
      end
    end
  end

  desc 'mBoy Deployment Initialized.'
  Mboy.deploy_starting_message

  desc 'Tag this release in git.'
  Mboy.tag_release

end

namespace :build do
  desc 'Install/update node packages.'
  task :npm do
    on roles(:web) do
      within release_path do
        execute :npm, 'install --production --silent --no-spin' # install packages
      end
    end
  end

end
