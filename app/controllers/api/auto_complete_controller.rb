class Api::AutoCompleteController < ApplicationController
  def autocomplete_results
    render json: {results: ProductList.terms_for(params[:string])}
  end
end
