class Area < ActiveRecord::Base
	validates_numericality_of :lat, :long
	validates_presence_of :lat, :long
end
