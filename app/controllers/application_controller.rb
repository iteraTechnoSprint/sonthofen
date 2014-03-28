require 'net/http'
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
        # This action uses query string parameters because it gets run
      # by an HTTP GET request, but this does not make any difference
      # to the way in which the parameters are accessed. The URL for
      # this action would look like this in order to list activated
      # clients: /clients?status=activated
      def index
            if request.get? 

                x= [params[:x]]
            end
            
            iteratec = Net::HTTP.get_response(URI.parse("http://www.iteratec.de")).body
            output = {'x' => x, 'iteratec' => iteratec}
            
            render :json => output
      end
end
