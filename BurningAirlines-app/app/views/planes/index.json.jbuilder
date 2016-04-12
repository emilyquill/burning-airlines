json.array!(@planes) do |plane|
  json.extract! plane, :id, :name, :columns, :rows
  json.url plane_url(plane, format: :json)
end
