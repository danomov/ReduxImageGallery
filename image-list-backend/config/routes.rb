Rails.application.routes.draw do
  post 'admin_token' => 'admin_token#create'
  resources :admins
  resources :items
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
