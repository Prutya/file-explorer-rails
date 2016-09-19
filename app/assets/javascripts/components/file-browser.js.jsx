class FileBrowser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dirName: "",
      subDirs: [],
      files:   []
    }
  }

  render() {
    return (
      <div>
        <h2>File Browser</h2>
        <h3>{this.state.dirName}</h3>
        <ul>
          {this.state.subDirs.map((dir) => {
            return <DirEntry title={dir}/>
          })}
          {this.state.files.map((file) => {
            return (
              <FileEntry
                title={file.name}
                size={file.size}
                extension={file.extension}
              />
            )
          })}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.serverRequest = $.get(this.props.source, (result) => {
      this.setState({
        dirName: result.path,
        subDirs: result.sub_directories,
        files:   result.files
      })
    }.bind(this))
  }

  componentWillUnmout() {
    this.serverRequest.abort()
  }
}
