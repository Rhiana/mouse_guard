if ENV['AWS_SECRET_ACCESS_KEY']
  CarrierWave.configure do |config|
    config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],
      :aws_secret_access_key  => ENV['AWS_SECRET_ACCESS_KEY'],
      :region                 => 'ap-southeast-2',
      :endpoint               => 'https://s3-ap-southeast-2.amazonaws.com'
    }
    config.fog_directory  = 'mouseguard-uploads'
    config.fog_public     = false
    config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}
  end
end
# http://mouseguard-uploads.s3-website-ap-southeast-2.amazonaws.com/
