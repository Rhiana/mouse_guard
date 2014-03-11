class Area < ActiveRecord::Base
	mount_uploader :path_view, PathViewUploader
	validates_numericality_of :lat, :long
	validates_presence_of :lat, :long
end
