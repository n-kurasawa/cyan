#
# Cookbook Name:: setdb
# Recipe:: default
#
# Copyright 2015, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
include_recipe "database::postgresql"

postgresql_connection_info = {
  :host     => "localhost",
  port: 5432,
  :username => "postgres",
  :password => "postgres"
}

postgresql_database "cyan" do
  connection postgresql_connection_info
  action :create
end
