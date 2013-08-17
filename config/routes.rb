Studymatch::Application.routes.draw do
  
  root 'votes#new'

  resources :votes, only: [:create, :new]

  get 'about' => 'pages#about'
  get 'faq' => 'pages#faq'

  match "oauth/callback" => "oauths#callback", via: [:get, :post]
  match "oauth/:provider" => "oauths#oauth", :as => :auth_at_provider, via: [:get, :post]
  get "oauths/oauth"
  get "oauths/callback"
  get 'logout' => 'oauths#destroy', :as => :logout
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
