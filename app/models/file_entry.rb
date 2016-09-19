class FileEntry

  attr_accessor :name, :size, :extension

  def initialize(path)
    @name = path.split("/").last
    @size = File.size(path)
    @extenstion = File.extname(path)
  end

end
