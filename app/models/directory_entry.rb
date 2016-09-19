class DirectoryEntry

  DEFAULT_PATH = "/"

  attr_accessor :path, :sub_directories, :files

  def initialize(path = DEFAULT_PATH)
    dir_path = path == DEFAULT_PATH ? path : "/#{path}"
    @path = dir_path
    @sub_directories = Dir.entries(dir_path).select{ |entry| File.directory? "#{dir_path}/#{entry}" } - ['..', '.']
    @files = Dir.entries(dir_path).select{ |entry| File.file? "#{dir_path}/#{entry}" }.map{ |entry| FileEntry.new("#{dir_path}/#{entry}") }
  end

end
