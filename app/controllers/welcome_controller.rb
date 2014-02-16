class WelcomeController < ApplicationController
  def index
    @area = Area.new
    @areas = Area.all
  end
end
