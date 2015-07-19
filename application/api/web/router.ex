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
    post "/login", AuthController, :login
    get "/login/check", AuthController, :check
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
