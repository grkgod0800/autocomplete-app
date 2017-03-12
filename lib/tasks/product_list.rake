namespace :product_list do
  desc "Seeds Redis DB with data"

  task :seed => :environment do
    ProductList.seed
  end
end
