source = "public/mouseguard_map.png"
dest = "public/mouse_guard_tiles"
tile_size = 256
(0..5).to_a.each do |z|
  tiles_this_level = Math.sqrt(4 ** z)
  this_size = tile_size * tiles_this_level
  outdir = "#{dest}/#{z}/"
  `rm -rf #{outdir}`
  `mkdir -p #{outdir}`
  `convert #{source} -resize #{this_size}x#{this_size} #{outdir}/base.png`
  Dir.chdir(outdir) do
    (0..(tiles_this_level - 1)).each do |i|
      `mkdir -p #{i}`
    end
    `convert base.png -crop 256x256 -set filename:tile "%[fx:page.y/256]/%[fx:page.x/256]" +repage +adjoin "%[filename:tile].png"`
    `rm base.png`
  end
  puts "finished layer #{z}"
end
