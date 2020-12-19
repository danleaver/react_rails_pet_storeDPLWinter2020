Rails.application.routes.draw do
  resources :sections do
    resources :items
  end
end
