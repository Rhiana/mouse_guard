require 'test_helper'

class AreasControllerTest < ActionController::TestCase
  setup do
    @area = areas(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:areas)
  end

  test "should create area" do
    assert_difference('Area.count') do
      post :create, area: { catagory: @area.catagory, description: @area.description, exploits: @area.exploits, inhabitants: @area.inhabitants, lat: @area.lat, long: @area.long, name: @area.name, reputation: @area.reputation }
    end

    assert_redirected_to root_path
  end

  test "should update area" do
    patch :update, id: @area, area: { catagory: @area.catagory, description: @area.description, exploits: @area.exploits, inhabitants: @area.inhabitants, lat: @area.lat, long: @area.long, name: @area.name, reputation: @area.reputation }
    assert_redirected_to root_path
  end

  test "should destroy area" do
    assert_difference('Area.count', -1) do
      delete :destroy, id: @area
    end

    assert_redirected_to root_path
  end
end
