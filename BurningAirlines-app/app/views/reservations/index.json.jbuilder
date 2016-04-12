json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :user_id, :flight_id, :column, :row
  json.url reservation_url(reservation, format: :json)
end