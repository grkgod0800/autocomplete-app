Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#index'

  post '/autocomplete/:string', to: 'api/auto_complete#autocomplete_results'
end
