class ProductList
  def self.seed
    list = File.readlines('product_list.txt').map{|line| line.chomp}
    list.each do |product|
      1.upto(product.length - 1) do |n|
        prefix = product[0, n]
        $redis.zadd "product-list:#{prefix.downcase}", 1, product.downcase
      end
    end
  end

  def self.terms_for(prefix)
    $redis.zrevrange "product-list:#{prefix.downcase}", 0, 9
  end
end
