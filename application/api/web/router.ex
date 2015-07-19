defmodule Api.Router do
  use Api.Web, :router

  # pipeline :browser do
  #   plug :accepts, ["html"]
  #   plug :fetch_session
  #   plug :fetch_flash
  #   plug :protect_from_forgery
  # end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :fetch_flash
  end

  scope "/api", Api do
    pipe_through :api
    resources "/events", EventController
    get "/event/participants/:event_id", EventController, :participants
    post "/event/join", EventController, :join
    post "/event/cancel", EventController, :cancel
    post "/login", AuthController, :login
    get "/login/user", AuthController, :loginUser
    get "/login/check", AuthController, :check
    get "/feeds/:event_id", FeedController, :index
    post "/feeds/:event_id", FeedController, :create
  end

  # scope "/api", Api do
  #   pipe_through :api
  #   resources "/events", EventController
  # end

  # scope "/", Api do
  #   pipe_through :browser # Use the default browser stack
  #
  #   get "/", PageController, :index
  # end
end
