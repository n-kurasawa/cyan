#
# Cookbook Name:: setuser
# Recipe:: default
#
# Copyright 2015, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
user "postgres" do
  password "$1$4aAXDRkF$9MlVz6GFmo2jHKSLrL3n01"
  supports :manage_home => true
  action :create
end
