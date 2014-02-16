json.array!(@areas) do |area|
  json.extract! area, :id, :name, :lat, :long, :catagory, :description, :inhabitants, :exploits, :reputation
  json.url area_url(area, format: :json)
end
