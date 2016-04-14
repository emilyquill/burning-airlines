json.array!(@flights) do |flight|
  json.extract! flight, :id, :origin, :destination, :date, :plane_id
  json.plane flight.plane
  json.url flight_url(flight, format: :json)
end
