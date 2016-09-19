Rails.application.routes.draw do

  root 'pages#home'

  scope "/api" do
    scope "/v1" do
      get '/browse',       to: 'browsing#list'
      get '/browse/*path', to: 'browsing#list'
    end
  end



end
