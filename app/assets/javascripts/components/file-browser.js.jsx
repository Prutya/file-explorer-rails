class FileBrowser extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dirName: "",
      subDirs: [],
      files:   []
    }
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

  render() {
    return (
      <div className="panel col-sm-6 col-md-4">
        <div className="panel-heading">
          <h2>File Browser</h2>
        </div>
        <div className="panel-body">
          <h3>
            <span className="glyphicon glyphicon-folder-open"></span>
            <span className="margin-left-lg">{this.state.dirName}</span>
          </h3>
          <ul className="list-group">
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
      </div>
    )
  }
}
