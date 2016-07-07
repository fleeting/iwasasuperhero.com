# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.

role :web, %w{monkee@104.237.135.230}


# Extended Server Syntax
# ======================
# This can be used to drop a more detailed server definition into the
# server list. The second argument is a, or duck-types, Hash and is
# used to set extended properties on the server.

server '104.237.135.230', user: 'monkee', roles: %w{web}

set :deploy_to, '/var/www/iwasasuperhero.com/dev'
set :deploy_env, 'dev'
set :branch, 'dev'
